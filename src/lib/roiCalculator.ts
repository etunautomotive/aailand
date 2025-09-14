import type { ScenarioInputs, ScenarioMetrics, EngineOutput, CalculateArgs, CalculateFn, ROIPreset } from '@/types/roi';

// Default values (for first render)
export const DEFAULTS = {
  current: {
    monthly_leads: 400,
    contact_rate_pct: 60,
    speed_to_lead_minutes: 1440,
    followups_per_lead: 2,
    avg_gross_per_deal: 5000,
    phone_lead_share_pct: null,
  },
  ai: {
    monthly_leads: 400,
    contact_rate_pct: 90,
    speed_to_lead_minutes: 1,
    followups_per_lead: 8,
    avg_gross_per_deal: 5000,
    phone_lead_share_pct: null,
  },
} as const;

// Engine helpers (STM & FUM exactly as specified)
const clamp01 = (x: number) => Math.max(0, Math.min(1, x));
const lerp = (a: number, b: number, t: number) => a + (b - a) * clamp01(t);

export function speedToLeadMultiplier(m: number) {
  if (m <= 1) return 4.91;
  if (m <= 5) return lerp(3.0, 1.2, (m - 1) / 4);
  if (m <= 15) return 1.0;
  if (m <= 60) return lerp(1.0, 0.4, (m - 15) / 45);
  if (m <= 1440) return lerp(0.4, 0.2, (m - 60) / 1380);
  return 0.2;
}

export function followUpMultiplier(touches: number) {
  // More conservative follow-up curve - diminishing returns kick in faster
  if (touches <= 1) return lerp(0.7, 0.85, touches / 1.0);  // 0-1: 0.7x to 0.85x
  if (touches <= 3) return lerp(0.95, 1.05, (touches - 1) / 2.0);  // 2-3: 0.95x to 1.05x
  if (touches <= 5) return lerp(1.05, 1.15, (touches - 3) / 2.0);  // 4-5: 1.05x to 1.15x
  if (touches <= 8) return lerp(1.15, 1.25, (touches - 5) / 3.0);  // 6-8: 1.15x to 1.25x
  if (touches <= 12) return lerp(1.25, 1.3, (touches - 8) / 4.0);  // 9-12: 1.25x to 1.3x
  return 1.3; // Cap at 1.3x for 13+ touches
}

function qualityMixFactor(phonePct?: number | null) {
  if (phonePct == null || Number.isNaN(phonePct)) return 1.0;
  const phone = Math.max(0, Math.min(100, phonePct)) / 100;
  const web = 1 - phone;
  return phone * 1.15 + web * 1.0;
}

function clamp(v: number | undefined, min: number, max: number, dflt: number) {
  const n = typeof v === "number" && !Number.isNaN(v) ? v : dflt;
  return Math.max(min, Math.min(max, n));
}

// Engine implementation (with optional realism cap)
export const calculate: CalculateFn = ({ current, ai, opts }) => {
  const cap = opts?.capQualifiedToContacted ?? true;

  const normalize = (s: Partial<ScenarioInputs>): ScenarioInputs => ({
    monthly_leads: clamp(s.monthly_leads, 40, 2000, 400),
    contact_rate_pct: clamp(s.contact_rate_pct, 0, 100, 60),
    speed_to_lead_minutes: clamp(s.speed_to_lead_minutes, 0, 1440, 1440),
    followups_per_lead: clamp(s.followups_per_lead, 0, 15, 2),
    avg_gross_per_deal: clamp(s.avg_gross_per_deal, 0, 10000, 5000),
    phone_lead_share_pct: s.phone_lead_share_pct ?? null,
  });

  const cur = normalize(current);
  const ai_ = normalize(ai);

  const compute = (inp: ScenarioInputs): ScenarioMetrics => {
    const contacted = Math.round(inp.monthly_leads * (inp.contact_rate_pct / 100));
    const stm = speedToLeadMultiplier(inp.speed_to_lead_minutes);
    const fum = followUpMultiplier(inp.followups_per_lead);
    const qmf = qualityMixFactor(inp.phone_lead_share_pct);

    let qualified = contacted * stm * fum * qmf;
    if (cap) qualified = Math.min(qualified, contacted); // optional realism cap
    qualified = Math.round(qualified);

    // Revenue is optional: qualified appointments × avg gross per deal
    const revenue = Math.round(qualified * inp.avg_gross_per_deal);

    return { 
      contacted, 
      qualified, // This represents "Appointments Booked"
      revenue,   // Optional revenue estimate
      stm: Math.round(stm * 100) / 100, // round to 2 decimals for display
      fum: Math.round(fum * 100) / 100, // round to 2 decimals for display
      quality_mix_factor: Math.round(qmf * 100) / 100 // round to 2 decimals for display
    };
  };

  const curM = compute(cur);
  const aiM = compute(ai_);
  return {
    current: { inputs: cur, metrics: curM },
    ai: { inputs: ai_, metrics: aiM },
    delta: {
      extra_appointments: Math.max(0, Math.round(aiM.qualified - curM.qualified)),
      extra_revenue: Math.max(0, Math.round(aiM.revenue - curM.revenue)),
    },
  };
};

// Preset configurations
export const PRESETS: Record<ROIPreset, Partial<ScenarioInputs>> = {
  Conservative: {
    contact_rate_pct: 80,
    speed_to_lead_minutes: 5,
    followups_per_lead: 5,
  },
  Standard: {
    contact_rate_pct: 90,
    speed_to_lead_minutes: 1,
    followups_per_lead: 8,
  },
  Aggressive: {
    contact_rate_pct: 95,
    speed_to_lead_minutes: 0,
    followups_per_lead: 10,
  },
};

// Analytics event helpers
export const analytics = {
  view: () => {
    // calc.view (page load with defaults)
    console.log('Analytics: calc.view');
  },
  sliderChange: (scope: 'current' | 'ai', field: keyof ScenarioInputs, value: number) => {
    // calc.slider_change {scope, field, value}
    console.log('Analytics: calc.slider_change', { scope, field, value });
  },
  presetSelect: (preset: ROIPreset) => {
    // calc.preset_select {preset}
    console.log('Analytics: calc.preset_select', { preset });
  },
  exportSnapshot: (current: ScenarioInputs, ai: ScenarioInputs, delta: { extra_deals: number; extra_revenue: number }) => {
    // calc.export_snapshot {current, ai, delta}
    console.log('Analytics: calc.export_snapshot', { current, ai, delta });
  },
  modeChange: (mode: 'AuditOnly' | 'AuditPlusProjection') => {
    // calc.mode_change {mode}
    console.log('Analytics: calc.mode_change', { mode });
  },
  assumptionNudge: (field: 'contact_rate_pct' | 'speed_to_lead_minutes' | 'followups_per_lead', delta: number) => {
    // calc.assumption_nudge {field, delta}
    console.log('Analytics: calc.assumption_nudge', { field, delta });
  },
};
