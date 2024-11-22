import { useState } from "react";

const colors = ["red", "green", "blue", "yellow", "purple"];


const ColorChange = () => { 

    const [currentColor,setCurrentColor] = useState(0);

    return (
        <div className="color-box" style={{backgroundColor : colors[currentColor]}}>

            <button onClick={() => {setCurrentColor((currentColor+1 ) % colors.length)}}>
                {colors[(currentColor+1) %colors.length]}
            </button>
            <h3> {colors[currentColor]}</h3>
        </div>
    );

};

export default ColorChange;