import React, { useContext, useState } from "react";
import { HeaderContext } from "../../../contexts/HeaderContext";
import StartButton from "../Start_button/StartButton";
import './ColorSelector.css'

const ColorSelector = ({textBar, betRegister, setPlaceholder, setInputValue, setInputStyle, inputValue, inputStyle, colorButton, setColorButton}) => {

    const {totalValue, setTotalValue} = useContext(HeaderContext);


    const handleSelectedButton = (ClickedButton) => {
        const newButtonSelected = colorButton.map(button => {
            if(ClickedButton.color === button.color) {
                return {...button, selected: true}
            }else {
                return {...button, selected: false}
            }
        })

        setColorButton(newButtonSelected)
    }


    return(
        <>
        <div id="colors_container">
        <p>Selecionar cor</p>
        <div id="colors">
            {colorButton.map((button, index) => <div key={index} onClick={() => handleSelectedButton(button)} style={button.selected ? {border: "2px solid black"} : {}} className="color_buttons" id={button.color}>{button.value}</div>)}
        </div>
        </div>

        <StartButton
        textBar={textBar}
        betRegister={betRegister}
        setPlaceholder={setPlaceholder}
        setInputValue={setInputValue}
        setInputStyle={setInputStyle}
        inputValue={inputValue}
        inputStyle={inputStyle}/>
        </>
        
        
    )
}

export default ColorSelector