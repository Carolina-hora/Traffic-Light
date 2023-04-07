import React,{ useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const TrafficLight = () => {
		const [selectedLight, setSelectedLight] = useState("");
		const [addExtra, setAddExtra] = useState(false);

		const handleOnClick = (light) => {
			setSelectedLight(light);
		}

		const renderLight = (color) => {
			return (
				<div className={`col-2 rounded-circle p-4 mx-auto ${selectedLight === color ? `${color} glow` : `${color}`}`} 
				onClick={() => handleOnClick(color)}>
				</div>
			)
		}

		const cycleSelectedLight = () => {
			let colors = ["bg-danger", "bg-warning", "bg-success"]
			let currentIndex = colors.indexOf(selectedLight)
			let nextIndex = (currentIndex+1) % colors.length;
			setSelectedLight(colors[nextIndex]);
		}

		const addPurpeLight = ()=> {
			setAddExtra(true);
		}
	
	return (
		<div className="container">
			<div className="text-center gx-2">
				<button className="btn btn-info text-white shadow p-3 rounded m-2 mt-5" onClick={cycleSelectedLight}>Cycle me</button>
				<button className="btn btn-info text-white shadow p-3 rounded m-2 mt-5" onClick={addPurpeLight}>Add extra</button>
			</div>
			<div className="row bg-dark mx-auto mt-5" style={{width: "15px", height: "50px"}}></div>
			<div className="row bg-dark d-flex flex-column mx-auto rounded" style={{width: "75px"}}>
			{renderLight("bg-danger")}
			{renderLight("bg-warning")}
			{renderLight("bg-success")}
			{addExtra && renderLight("purple")}
			</div>
			
			
		</div>
	);
};

export default TrafficLight;
