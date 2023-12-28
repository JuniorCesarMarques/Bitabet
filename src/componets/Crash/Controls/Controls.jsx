import { useState } from 'react';
import styles from './Controls.module.css';

const Controls = ({ totalValue, setTotalValue }) => {

    //Placeholder
    const [placeholder, setPlaceholder] = useState("Quantia");

    // Input style 
    const [inputStyle, setInputStyle] = useState();

    // Input value
    const [inputValue, setInputValue] = useState(); 

    // State of button's styles
    const [normalBtnSelected, setNormalBtnSelected] = useState({backgroundColor: "#F12C4C"});
    const [autoBtnSelected, setAutoBtnSelected] = useState({backgroundColor: "#323B45"});

    const handleSelectedButton = (e) => {
        const button = e.target.innerText;
        if(button === "Normal") {
            console.log("normal")
            setNormalBtnSelected({backgroundColor: "#F12C4C"});
            setAutoBtnSelected({backgroundColor: "#323B45"});
        }else {
            console.log("auto")
            setNormalBtnSelected({backgroundColor: "#323B45"});
            setAutoBtnSelected({backgroundColor: "#F12C4C"});
        }
    }

    const handlePlayButton = () => {
        if(inputValue > 0.25) {
            if(totalValue > inputValue) {
                setTotalValue(totalValue - inputValue)
            }
            
        }else {
            setInputValue("");
            setPlaceholder("Valor mínimo R$0.25");
            setInputStyle({border: "2px solid red"});
            setTimeout(() => {
                setInputStyle({border: "none"});
                setPlaceholder("Quantia");
            }, 3000);
        }
    }

    const handleBetValue = (e) => {
        const decreaseButton = e.target.innerText === "1/2";
        if(decreaseButton) {
            setInputValue(inputValue / 2);
        }else {
            setInputValue(inputValue * 2);
        }
    }

    return ( 
            <div className={styles.controls}>
                <div className={styles.container_buttons}>
                    <button 
                    style={normalBtnSelected}
                    onClick={handleSelectedButton}
                    className={styles.normal_auto_buttons}>
                        Normal
                    </button>
                    <button 
                    style={autoBtnSelected}
                    onClick={handleSelectedButton}
                    className={styles.normal_auto_buttons}>
                        Auto
                    </button>
                </div>
                <button 
                onClick={handlePlayButton}
                className={styles.play_button}>Começar o jogo</button>
                <div className={styles.container_value}>
                    <input
                    placeholder={placeholder}
                    style={inputStyle} 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className={styles.input_value} type="number" />
                    <button onClick={handleBetValue}>1/2</button>
                    <button onClick={handleBetValue}>2x</button>
                </div>
            </div>
     );
}
 
export default Controls;