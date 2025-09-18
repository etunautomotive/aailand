"use client";

import React, { useMemo, useState, useEffect } from "react";
import { Card, CardBody, CardHeader } from "@heroui/react";
import { Switch, Button, Divider } from "@heroui/react";
import { calculate, DEFAULTS, PRESETS, analytics } from "@/lib/roiCalculator";
// import type { ScenarioInputs, ROIScope, ROIPreset } from "@/types/roi";
import OutlinedSlider from "@/common/component/ui/OutlinedSlider";

const sliderClass = "max-w-full";

const sectionCardClasses =
	"bg-white/80 dark:bg-white/5 border border-gray-200/60 dark:border-gray-800/60 rounded-2xl";

function SliderRow(props) {
	return <OutlinedSlider {...props} />;
}

function ScenarioPanel({ title, badge, color, state, scope, onSliderChange }) {
	const fmt = {
		int: (n) => Math.round(Number(n || 0)).toLocaleString(),
		pct: (n) => `${Math.round(Number(n || 0))}%`,
		usd: (n) => `$${Math.round(Number(n || 0)).toLocaleString()}`,
		min: (n) => {
			const minutes = Math.round(Number(n || 0));
			if (minutes >= 60) {
				const hours = Math.round(minutes / 60 * 10) / 10; // round to 1 decimal
				return hours % 1 === 0 ? `${Math.round(hours)}h` : `${hours}h`;
			}
			return `${minutes}m`;
		},
	};
	return (
		<Card className={`${sectionCardClasses} w-full`} shadow="sm">
			<CardHeader className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<div className={`w-2 h-2 rounded-full ${color}`} />
					<h3 className="text-lg font-semibold text-black dark:text-white">{title}</h3>
				</div>
				<span className="text-xs px-2 py-1 rounded-md bg-gray-200/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300">
					{badge}
				</span>
			</CardHeader>
			<Divider className="my-1" />
			<CardBody className="space-y-1">
				<SliderRow
					label="Monthly Leads"
					value={state.monthly_leads}
					min={40}
					max={2000}
					step={10}
					formatValue={fmt.int}
					formatMin={(n) => fmt.int(n)}
					formatMax={(n) => fmt.int(n)}
					onChange={(v) => onSliderChange(scope, "monthly_leads", v)}
				/>

				<SliderRow
					label="Contact Rate (%)"
					value={state.contact_rate_pct}
					min={0}
					max={100}
					step={1}
					formatValue={fmt.pct}
					formatMin={(n) => `${n}%`}
					formatMax={(n) => `${n}%`}
					onChange={(v) => onSliderChange(scope, "contact_rate_pct", v)}
				/>

				<SliderRow
					label="Speed to Lead (minutes)"
					value={state.speed_to_lead_minutes}
					min={0}
					max={1440}
					step={1}
					formatValue={fmt.min}
					formatMin={() => "1m"}
					formatMax={() => "24h"}
					onChange={(v) => onSliderChange(scope, "speed_to_lead_minutes", v)}
				/>

				<SliderRow
					label="Follow-ups per Lead"
					value={state.followups_per_lead}
					min={0}
					max={15}
					step={1}
					formatValue={fmt.int}
					formatMin={(n) => fmt.int(n)}
					formatMax={(n) => fmt.int(n)}
					onChange={(v) => onSliderChange(scope, "followups_per_lead", v)}
				/>


				<SliderRow
					label="Avg Gross per Deal ($)"
					value={state.avg_gross_per_deal}
					min={0}
					max={10000}
					step={50}
					formatValue={fmt.usd}
					formatMin={(n) => `$${fmt.int(n)}`}
					formatMax={(n) => `$${fmt.int(n)}`}
					onChange={(v) => onSliderChange(scope, "avg_gross_per_deal", v)}
				/>
			</CardBody>
		</Card>
	);
}

function MetricCard({ label, value, sublabel, accent }) {
	return (
		<Card shadow="sm" className={`${sectionCardClasses}`}>
			<CardBody className="p-2">
				<div className="flex items-center justify-between">
					<div className="flex-1 min-w-0">
						<p className="text-[10px] text-gray-500 dark:text-gray-400">{label}</p>
						<p className="text-lg font-semibold text-black dark:text-white whitespace-nowrap overflow-hidden text-ellipsis">{value}</p>
					</div>
					{accent ? (
						<span className="text-[10px] px-1 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 flex-shrink-0">{accent}</span>
					) : null}
				</div>
				{sublabel ? (
					<p className="mt-1 text-[10px] text-gray-500 dark:text-gray-400">{sublabel}</p>
				) : null}
			</CardBody>
		</Card>
	);
}

export default function Comparison() {
	const [showJson, setShowJson] = useState(false);
	const [locked, setLocked] = useState(true);
	const [current, setCurrent] = useState(DEFAULTS.current);
	const [ai, setAi] = useState(DEFAULTS.ai);

	// Analytics: page view
	useEffect(() => {
		analytics.view();
	}, []);

	// Slider change handler with lead locking and analytics
	function onSliderChange(scope, field, value) {
		analytics.sliderChange(scope, field, value);
		
		if (scope === "current") {
			const next = { ...current, [field]: value };
			setCurrent(next);
			if (locked && field === "monthly_leads") setAi({ ...ai, [field]: value });
		} else {
			const next = { ...ai, [field]: value };
			setAi(next);
			if (locked && field === "monthly_leads") setCurrent({ ...current, [field]: value });
		}
	}

	// Preset handler
	function onPresetSelect(preset) {
		analytics.presetSelect(preset);
		setAi({ ...ai, ...PRESETS[preset] });
	}

	const result = useMemo(() => calculate({ current, ai, opts: { capQualifiedToContacted: true } }), [current, ai]);

	const kpi = useMemo(() => {
		return [
			{
				label: "Contacted Leads",
				current: Math.round(result.current.metrics.contacted).toLocaleString(),
				ai: Math.round(result.ai.metrics.contacted).toLocaleString(),
			},
			{
				label: "Appointments Booked",
				current: Math.round(result.current.metrics.qualified).toLocaleString(),
				ai: Math.round(result.ai.metrics.qualified).toLocaleString(),
			},
			{
				label: "Revenue Potential",
				current: `$${Math.round(result.current.metrics.revenue).toLocaleString()}`,
				ai: `$${Math.round(result.ai.metrics.revenue).toLocaleString()}`,
			},
		];
	}, [result]);

	return (
		<div className="max-w-6xl mx-auto px-4 py-1">
			<div className="flex items-center justify-between mb-1">
				<div className="flex items-center gap-2">
					<Button size="sm" variant="flat" className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
						AI-Powered ROI Calculator
					</Button>
					<h2 className="text-base font-bold text-black dark:text-white">Automotive AI Impact</h2>
				</div>
				<Switch size="sm" isSelected={showJson} onValueChange={setShowJson}>
					<span className="text-xs text-gray-600 dark:text-gray-300">JSON</span>
				</Switch>
			</div>

			<p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
				See how AI can transform your dealership&apos;s performance with realistic projections.
			</p>

			<div className="grid md:grid-cols-2 gap-2">
				<ScenarioPanel
					title="Current Performance"
					badge="Traditional"
					color="bg-red-500"
					state={current}
					scope="current"
					onSliderChange={onSliderChange}
				/>
				<ScenarioPanel
					title="With Automotive AI"
					badge="AI-Enhanced"
					color="bg-emerald-500"
					state={ai}
					scope="ai"
					onSliderChange={onSliderChange}
				/>
			</div>

			<div className="grid md:grid-cols-3 gap-1 mt-2">
				{kpi.map((k) => (
					<Card key={k.label} className={`${sectionCardClasses}`} shadow="sm">
						<CardBody className="p-1.5">
							<p className="text-[10px] text-gray-500 dark:text-gray-400 mb-1">{k.label}</p>
							<div className="flex items-center justify-between">
								<div className="flex-1 min-w-0">
									<p className="text-lg font-bold whitespace-nowrap overflow-hidden text-ellipsis">
										<span className="text-red-500">{k.current}</span>
										<span className="text-gray-400 mx-1">→</span>
										<span className="text-green-500">{k.ai}</span>
									</p>
								</div>
								<span className="h-1 w-6 rounded-full bg-emerald-500 ml-1 flex-shrink-0" />
							</div>
						</CardBody>
					</Card>
				))}
			</div>

			<Card className={`${sectionCardClasses} mt-2`} shadow="sm">
				<CardHeader>
					<div className="w-full flex items-center justify-between">
						<h3 className="text-sm font-semibold text-black dark:text-white">Monthly Performance Boost</h3>
						<span className="text-xs text-emerald-400">AI Impact Analysis</span>
					</div>
				</CardHeader>
				<CardBody>
					<div className="grid md:grid-cols-2 gap-1">
						<MetricCard
							label="Extra Appointments per Month"
							value={`+${Math.round(result.delta.extra_appointments).toLocaleString()}`}
							accent="appointments"
						/>
						<MetricCard
							label="Extra Revenue per Month"
							value={`+$${Math.round(result.delta.extra_revenue).toLocaleString()}`}
							accent="revenue"
						/>
					</div>
					<div className="mt-2 p-2 rounded-xl bg-gray-100 dark:bg-gray-800/60 border border-gray-200/60 dark:border-gray-700/60 text-center">
						<p className="text-xs text-gray-700 dark:text-gray-300">Annual Revenue Increase:</p>
						<p className="text-xl font-semibold text-black dark:text-white">${Math.round(result.delta.extra_revenue * 12).toLocaleString()}</p>
					</div>
				</CardBody>
			</Card>

			{showJson ? (
				<Card className={`${sectionCardClasses} mt-6`} shadow="sm">
					<CardBody className="text-xs whitespace-pre-wrap font-mono">
						{JSON.stringify(result, null, 2)}
					</CardBody>
				</Card>
			) : null}
		</div>
	);
}


