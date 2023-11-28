import React from "react";

const BetValue = () => {
    return(
        <>
            <div id="bet_value">
                <input type="number" placeholder="Quantia" id="input_value" />
                    <div className="increase_decrease" id="decrease_value">1/2</div>
                    <div className="increase_decrease" id="increase_value">2x</div>
            </div>
        </>
    )
}

export default BetValue