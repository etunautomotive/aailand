export type ScenarioInputs = {
  monthly_leads: number;                    // 40–2000 (UI clamp)
  contact_rate_pct: number;                 // 0–100
  speed_to_lead_minutes: number;            // 0–1440
  followups_per_lead: number;               // 0–15
  avg_gross_per_deal: number;               // 0–10000 (optional for revenue calculation)
  phone_lead_share_pct?: number | null;     // optional 0–100
};

export type ScenarioMetrics = {
  contacted: number;
  qualified: number; // This is "Appointments Booked"
  revenue: number;   // Optional: qualified × avg_gross_per_deal
  stm: number;
  fum: number;
  quality_mix_factor: number;
};

export type EngineOutput = {
  current: { inputs: ScenarioInputs; metrics: ScenarioMetrics };
  ai:      { inputs: ScenarioInputs; metrics: ScenarioMetrics };
  delta:   { extra_appointments: number; extra_revenue: number };
};

export type CalculateArgs = {
  current: Partial<ScenarioInputs>;
  ai: Partial<ScenarioInputs>;
  opts?: { capQualifiedToContacted?: boolean }; // default true
};

export type CalculateFn = (args: CalculateArgs) => EngineOutput;

export type ROIPreset = "Conservative" | "Standard" | "Aggressive";
export type ROIMode = "AuditOnly" | "AuditPlusProjection";
export type ROIScope = "current" | "ai";
