import logo from "./logo.svg";
import "./App.css";
import colorData from "./data/color-data.json";
import React, { useState } from "react";
import ColorList from "./component/ColorList";

function App() {
	const [colors, setColors] = useState(colorData);
	return (
		<ColorList
			colors={colors}
			onRateColor={(id, rating) => {
				console.log("clicked");
				// const newColors = colors.map((color) =>
				// 	color.id === id ? { ...color, rating } : color
				// );
				// setColors(newColors);
			}}
			onRemoveColor={(id) => {
				console.log("Clicked with id: ", id);
				const newColors = colors.filter((color) => color.id !== id);
				setColors(newColors);
			}}
		/>
	);
}

export default App;
