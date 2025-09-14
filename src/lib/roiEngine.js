// Deterministic ROI calculation engine per "Automotive AI ROI Calculator – Metrics Brain"
// Keep math precise; clamp inputs; expose pure functions for reuse.

// Helper utils
function clamp(value, min, max) {
	if (Number.isNaN(value) || value === null || value === undefined) return undefined;
	return Math.min(Math.max(value, min), max);
}

function clamp01(x) {
	return Math.max(0, Math.min(1, x));
}

function lerp(a, b, t) {
	return a + (b - a) * clamp01(t);
}

// Speed-to-Lead Multiplier (STM)
function speedToLeadMultiplier(minutes) {
	const m = minutes;
	if (m <= 1) return 4.91;
	if (m <= 5) {
		// 1 -> 5 minutes, taper from 3.0 down to 1.2
		return lerp(3.0, 1.2, (m - 1) / 4);
	}
	if (m <= 15) {
		// 5 -> 15 minutes, flat 1.0
		return 1.0;
	}
	if (m <= 60) {
		// 15 -> 60 minutes, 1.0 -> 0.4
		return lerp(1.0, 0.4, (m - 15) / 45);
	}
	if (m <= 1440) {
		// 60 -> 1440, 0.4 -> 0.2
		return lerp(0.4, 0.2, (m - 60) / 1380);
	}
	return 0.2;
}

// Follow-up Multiplier (FUM)
function followUpMultiplier(touches) {
	const t = touches;
	if (t <= 1) {
		return lerp(0.6, 0.8, t / 1.0);
	}
	if (t <= 4) {
		return lerp(0.9, 1.1, (t - 2) / 2.0);
	}
	if (t === 5) {
		return 1.3;
	}
	if (t <= 10) {
		return lerp(1.35, 1.6, (t - 6) / 4.0);
	}
	return lerp(1.65, 1.75, (t - 11) / 4.0);
}

// Quality Mix Factor
function qualityMixFactor(phoneLeadSharePct) {
	if (phoneLeadSharePct === null || phoneLeadSharePct === undefined) return 1.0;
	const phone = clamp01(phoneLeadSharePct / 100);
	const web = 1 - phone;
	return phone * 1.15 + web * 1.0;
}

// Defaults block
export const defaults = {
	monthly_leads: 400,
	contact_rate_pct: { current: 60, ai: 90 },
	speed_to_lead_minutes: { current: 1440, ai: 1 },
	followups_per_lead: { current: 2, ai: 8 },
	close_rate_from_appointment_pct: 6,
	avg_gross_per_deal: 5000,
	phone_lead_share_pct: null,
};

// Validation ranges
const ranges = {
	monthly_leads: [40, 2000],
	contact_rate_pct: [0, 100],
	speed_to_lead_minutes: [0, 1440],
	followups_per_lead: [0, 15],
	close_rate_from_appointment_pct: [0, 50],
	avg_gross_per_deal: [0, 10000],
	phone_lead_share_pct: [0, 100],
};

function getDefaultFor(key, scenario) {
	if (key === 'contact_rate_pct') return defaults.contact_rate_pct[scenario];
	if (key === 'speed_to_lead_minutes') return defaults.speed_to_lead_minutes[scenario];
	if (key === 'followups_per_lead') return defaults.followups_per_lead[scenario];
	return defaults[key];
}

function validateScenarioInputs(input, scenario) {
	const out = {};
	for (const key of [
		'monthly_leads',
		'contact_rate_pct',
		'speed_to_lead_minutes',
		'followups_per_lead',
		'close_rate_from_appointment_pct',
		'avg_gross_per_deal',
		'phone_lead_share_pct',
	]) {
		const valueRaw = input && typeof input[key] !== 'undefined' ? Number(input[key]) : undefined;
		const value = Number.isFinite(valueRaw) ? valueRaw : undefined;
		const [min, max] = ranges[key];
		const clamped = clamp(value, min, max);
		out[key] = clamped !== undefined ? clamped : getDefaultFor(key, scenario);
	}
	return out;
}

function computeMetrics(validInputs) {
	const contacted = validInputs.monthly_leads * (validInputs.contact_rate_pct / 100);
	const stm = speedToLeadMultiplier(validInputs.speed_to_lead_minutes);
	const fum = followUpMultiplier(validInputs.followups_per_lead);
	const qmf = qualityMixFactor(validInputs.phone_lead_share_pct);
	const qualified = contacted * stm * fum * qmf;
	const closed_deals = qualified * (validInputs.close_rate_from_appointment_pct / 100);
	const revenue = closed_deals * validInputs.avg_gross_per_deal;
	return {
		contacted,
		qualified,
		closed_deals,
		revenue,
		stm,
		fum,
		quality_mix_factor: qmf,
	};
}

export function computeROI(payload) {
	const currentInputs = validateScenarioInputs(payload?.current || {}, 'current');
	const aiInputs = validateScenarioInputs(payload?.ai || {}, 'ai');

	const currentMetrics = computeMetrics(currentInputs);
	const aiMetrics = computeMetrics(aiInputs);

	// Round user facing counts to whole numbers in output? Spec says counts round, but keep internal float.
	function roundCounts(metrics) {
		return {
			...metrics,
			contacted: Math.round(metrics.contacted),
			qualified: Math.round(metrics.qualified),
			closed_deals: Math.round(metrics.closed_deals),
			revenue: Math.round(metrics.revenue),
		};
	}

	const result = {
		current: {
			inputs: currentInputs,
			metrics: roundCounts(currentMetrics),
		},
		ai: {
			inputs: aiInputs,
			metrics: roundCounts(aiMetrics),
		},
		delta: {
			extra_deals: Math.round(aiMetrics.closed_deals - currentMetrics.closed_deals),
			extra_revenue: Math.round(aiMetrics.revenue - currentMetrics.revenue),
		},
	};

	return result;
}

// Named exports for direct use in UI when needed
export const ROIEngine = {
	compute: computeROI,
	defaults,
	utils: {
		speedToLeadMultiplier,
		followUpMultiplier,
		qualityMixFactor,
		lerp,
		clamp01,
	},
};

export default computeROI;


