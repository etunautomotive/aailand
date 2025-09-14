"use client";

import React from "react";
import {Slider} from "@heroui/react";

const sliderClass = "max-w-full";

export default function OutlinedSlider({
	label,
	value,
	min,
	max,
	step = 1,
	formatValue = (n) => String(n),
	formatMin = (n) => String(n),
	formatMax = (n) => String(n),
	onChange,
	ariaLabel,
}) {
	return (
		<div>
			<div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-300">
				<span>{label}</span>
				<span className="text-gray-900 dark:text-gray-100 font-medium">{formatValue(value)}</span>
			</div>
			<Slider
				aria-label={ariaLabel || label}
				className={sliderClass}
				color="foreground"
				showOutline={true}
				size="sm"
				classNames={{
					track: "h-[4px] rounded-full bg-gray-300 dark:bg-gray-700",
					filler: "h-[4px] rounded-full bg-foreground",
					thumb: "w-5 h-5 rounded-full bg-background border-[3px] border-white dark:border-white shadow-none aspect-square",
				}}
				minValue={min}
				maxValue={max}
				step={step}
				value={value}
				onChange={(v) => onChange(Number(v))}
			/>
		</div>
	);
}


