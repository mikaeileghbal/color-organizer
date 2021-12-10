import React from "react";
import Color from "./Color";

export default function ColorList({
	colors = [],
	onRemoveColor = (f) => f,
	onRateColor,
}) {
	if (!colors.length) return <div>No Colors Listed.</div>;
	return (
		<div>
			{colors.map((color, i) => (
				<Color
					key={i}
					{...color}
					onRemove={onRemoveColor}
					onRate={onRateColor}
				/>
			))}
		</div>
	);
}
