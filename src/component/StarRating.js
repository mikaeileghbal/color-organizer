import { FaStar } from "react-icons/fa";

const createArray = (length) => [...Array(length)];

export default function StarRating({
	totalStarts = 5,
	selectedStarts = 0,
	onRate,
}) {
	return (
		<div className="star-rating__container">
			{createArray(totalStarts).map((item, index) => (
				<Star
					key={index}
					selected={selectedStarts > index}
					onSelect={() => console.log("Clicked star")}
					onClick={() => console.log("Clicked star")}
				/>
			))}

			<button onClick={() => console.log("Clicked button")}></button>
			<p>
				{selectedStarts} of {totalStarts} selected
			</p>
		</div>
	);
}

// const Star = function (selected) {
// 	return <FaStar color={selected ? "red" : "gray"} />;
// };
const Star = ({ selected = false }) => (
	<FaStar color={selected ? "red" : "gray"} />
);
