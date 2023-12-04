import React, { useContext, useState } from "react";
import { HeaderContext } from "../contexts/HeaderContext";
import './StartButton.css'


const StartButton = ({betRegister, textBar, setPlaceholder, setInputStyle, inputStyle, inputValue, setInputValue}) => {


    const {totalValue, setTotalValue} = useContext(HeaderContext);


    const handleClickButton = () => {
        if (inputValue === "") {
            setPlaceholder("Digite um valor!")
            setInputStyle({...inputStyle, animation: "input_animation 1s linear"})
            setTimeout(() => {
                setInputStyle({...inputStyle, animation: "none"})
            }, 1000)
        } else if (inputValue < 0.25) {
            setInputValue("")
            setPlaceholder("Valor minimo: R$ 0.25")
            setInputStyle({...inputStyle, animation: "input_animation 1s linear"})
            setTimeout(() => {
                setInputStyle({...inputStyle, animation: "none"})
            }, 1000)

        }else if (totalValue >= inputValue) {
            setTotalValue(inputValue > 0 ? totalValue - inputValue : totalValue)

            betRegister()

        }
    }

    
    return(
        <div onClick={handleClickButton} id="start_button_container">
        <div style={textBar === "Girando em" ? {cursor: "pointer"} : {cursor: "not-allowed", opacity: "40%"}} 
        id="start_button">Começar o jogo</div>
        </div>
    )
}

export default StartButton;