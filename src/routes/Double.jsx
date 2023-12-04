import React, { useState } from "react";
import NormalAuto from "../componets/NormalAuto";
import BetValue from "../componets/BetValue";
import ColorSelector from "../componets/ColorSelector";
import PreviousCards from "../componets/PreviousCards";
import ActualCards from "../componets/ActualCards";
import { useContext } from "react";
import { HeaderContext } from "../contexts/HeaderContext";

const Double = () => {

    const [colorButton, setColorButton] = useState([
        {color: "red", value: "2x", selected: true},
        {color: "white", value: "14x", selected: false},
        {color: "black", value: "2x", selected: false}
    ])

    const {display, setDisplay} = useContext(HeaderContext);
    const {totalValue, setTotalValue} = useContext(HeaderContext);

    const [textBar, setTextBar] = useState()
    const [whiteValue, setWhiteValue] = useState(0);
    const [redValue, setRedValue] = useState(0);
    const [blackValue, setBlackValue] = useState(0);
    const [selectedColors, setSelectedColors] = useState([]);
    const [placeholder, setPlaceholder] = useState("Quantia")
    const [inputValue, setInputValue] = useState("")
    const [inputStyle, setInputStyle] = useState(
        {backgroundColor: "var(--cor-primaria)",
         borderRadious: "3px",
         padding: "10px",
         color: "white",
         border: "none"}
    )



    const [animationCards, setAnimationCards] = useState({animation: "none"});
    const [previousCards, setPreviousCards] = useState([
        {backgroundColor: "white"},
        {backgroundColor: "#F12C4C"},
        {backgroundColor: "#F12C4C"},
        {backgroundColor: "#323B45"},
        {backgroundColor: "#F12C4C"},
        {backgroundColor: "white"},
        {backgroundColor: "#F12C4C"},
        {backgroundColor: "#F12C4C"},
        {backgroundColor: "#323B45"},
        {backgroundColor: "#F12C4C"},
    ]);

    let randomNumber = Math.random() * 100;
    let number = randomNumber.toFixed(2);
    let whiteNumbers = [10, 20, 30];

    let drawnCard;
    const startAnimation = () => {
        if (whiteNumbers.includes(number)) {
            drawnCard = "white"
            setAnimationCards({animation: "carrocel_white 12s"});
            setTimeout(() => {
                setAnimationCards({animation: "none"})
                setPreviousCards([...previousCards, {backgroundColor: "white"}])
  
            },12000)
            return
        }else if(number > 49) {
            drawnCard = "black"
            setAnimationCards({animation: "carrocel_black 12s"});
            setTimeout(() => {
                setAnimationCards({animation: "none"})
                setPreviousCards([...previousCards, {backgroundColor: "#323B45"}])
            }, 12000);
        }else {
            setAnimationCards({animation: "carrocel_red 12s"});
            drawnCard = "red"
            setTimeout(() => {
                setAnimationCards({animation: "none"})
                setPreviousCards([...previousCards, {backgroundColor: "#F12C4C"}]) 
            }, 12000)
        }
    }


    let selectedButton = colorButton.filter((obj) => obj.selected)[0].color;

    const betRegister = () => {
        switch(selectedButton) {
            case "red":
                setRedValue(redValue + +inputValue);
                setSelectedColors([...selectedColors, "red"]);
                console.log("registrou vermelho")
                break
            case "black":
                setBlackValue(blackValue + +inputValue);
                setSelectedColors([...selectedColors, "black"]);
                console.log("registrou preto")
                break
            default:
                setWhiteValue(whiteValue + inputValue);
                setSelectedColors([...selectedColors, "white"]);
                console.log("registrou branco")
        }

    }

    const payBet = () => {
        if(true) {
            switch(drawnCard) {
                case "red":
                    setTotalValue(totalValue + redValue * 2);
                    break
                case "black":
                    setTotalValue(totalValue + blackValue * 2);
                    break
                default:
                    setTotalValue(totalValue + whiteValue * 14);
            }
        }

    }

    const resetValues = () => {

        setSelectedColors([])

        setBlackValue([])
        setRedValue([])
        setWhiteValue([])
    }



    
    return(
        <div onClick={() => setDisplay("menu_hidden")}>
        <PreviousCards previousCards={previousCards} />
        <ActualCards
        resetValues={resetValues}
        payBet={payBet}
        textBar={textBar}
        setTextBar={setTextBar}
        startAnimation={startAnimation}
        animationCards={animationCards} />

        <NormalAuto />
            <BetValue 
            setInputValue={setInputValue}
            inputStyle={inputStyle}
            inputValue={inputValue}
            placeholder={placeholder}/>
            <ColorSelector
            betRegister={betRegister}
            textBar={textBar}
            colorButton={colorButton}
            setColorButton={setColorButton}
            setPlaceholder={setPlaceholder}
            setInputValue={setInputValue}
            setInputStyle={setInputStyle}
            inputValue={inputValue}
            inputStyle={inputStyle} />
        </div>
        
    )
}

export default Double