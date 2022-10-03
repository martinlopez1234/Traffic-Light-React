import React, { useState,useEffect } from "react";


//include images into your bundle


   


//create your first component
const TrafficLight = () => {
	const [color, setColor] = useState("rojo");
	const colored = ["rojo","amarillo","verde"]
	const [contador, setContador] = useState(0);
    const [colorClick, setcolorClick] = useState(0);

	useEffect(() =>{

		setcolorClick(colored[contador]);
		setColor(colorClick)
		
	},[contador]);


	function colores(){
		var aux =contador+1;
		
		if(aux>2){
			setContador(0);
		}else{
			setContador(aux);
		}
		
		
		
			
		
			
		}
		
	
	return (
	<>
	<center><div className="sontenedor"></div></center>
	<center><div className="recta">
		<center><div onClick={() => setColor("rojo")}  className={"circulo rojo" + ((color==="rojo") ? " luz" :"")}  ></div></center>
		<center><div onClick={() => setColor("amarillo")}   className={"circulo amarillo"  + ((color==="amarillo") ? " luz" :"")}></div></center>
		<center><div onClick={() => setColor("verde")}  className={"circulo verde" + ((color==="verde") ? " luz" :"")}></div></center>
	</div>	</center>
	<button onClick={() =>colores() }>intercambiar</button>
	
	
	</>
	);
};

export default TrafficLight;
