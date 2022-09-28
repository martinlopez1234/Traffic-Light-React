import React, { useState } from "react";


//include images into your bundle


//create your first component
const TrafficLight = () => {
	const [color, setColor] = useState("rojo");
	
	return (
	<>
	<center><div className="sontenedor"></div></center>
	<center><div className="recta">
		<center><div onClick={() => setColor("rojo")}  className={"circulo rojo" + ((color==="rojo") ? " luz" :"")} ></div></center>
		<center><div onClick={() => setColor("amarillo")}   className={"circulo amarillo"  + ((color==="amarillo") ? " luz" :"")}></div></center>
		<center><div onClick={() => setColor("verde")}  className={"circulo verde" + ((color==="verde") ? " luz" :"")}></div></center>
	</div>	</center>
	</>
	);
};

export default TrafficLight;
