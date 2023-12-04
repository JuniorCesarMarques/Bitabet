import React, { useEffect, useState } from "react";
import CountDown from "./CountDown";
import './BarProgress.css';

const BarProgress = ({resetValues, payBet,textBar, setTextBar, pay, startAnimation}) => {


    const [displayBarContainer, setDisplayBarContainer] = useState({display: "flex"});
    const [animationBarStyle, setAnimationBarStyle] =useState({animation: "animationBar 15s linear"});

    const resetAnimations = () => {



        setAnimationBarStyle({animation: "none"});
        setDisplayBarContainer({display: "none"});
    }

    const startGame = () => {
        setDisplayBarContainer({display: "flex"});
        setAnimationBarStyle({animation: "animationBar 15s linear"});

        setTextBar("Girando em")


    }

    useEffect(() => {
        startGame()
    }, [])



    return(
        <>

        <CountDown 
        resetValues={resetValues}
        payBet={payBet}
        textBar={textBar}
        setTextBar={setTextBar}
        resetAnimations={resetAnimations}
        setAnimationBarStyle={setAnimationBarStyle}
        setDisplayBarContainer={setDisplayBarContainer}
        startGame={startGame} pay={pay} startAnimation={startAnimation} />
        <div id="bar_container" style={displayBarContainer}>
            <div id="bar" style={animationBarStyle}></div>
        </div>
        </>
        
    )
}

export default BarProgress;