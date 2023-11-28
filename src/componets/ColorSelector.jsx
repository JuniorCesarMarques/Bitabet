import React from "react";

const ColorSelector = () => {
    return(
        <div id="colors_container">
            <p>Selecionar cor</p>
            <div id="colors">
                <div className="color_buttons" id="red">2x</div>
                <div className="color_buttons" id="white">14x</div>
                <div className="color_buttons" id="black">2x</div>
            </div>
        </div>
        
    )
}

export default ColorSelector