import React from "react";
import './BetValue.css'

const BetValue = ({ inputStyle, inputValue, placeholder, setInputValue }) => {
    const buttons = [{value: "1/2"}, {value: "2x"}]


    const increaseDecreaseValue = (button) => {
        if(button === buttons[0].value) {
            setInputValue(inputValue / 2)
            
        } else{
            setInputValue(inputValue * 2)
        }
    }


    return(
        <>
            <div id="bet_value">
                <input onChange={(e) => setInputValue(e.target.value)} 
                type="number"
                value={inputValue}
                placeholder={placeholder} 
                style={inputStyle} />


                {buttons.map((button, index) => <div key={index} onClick={() => increaseDecreaseValue(button.value)} className="increase_decrease">{button.value}</div>)}
            </div>
        </>
    )
}

export default BetValue