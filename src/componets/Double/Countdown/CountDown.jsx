import React, { useEffect, useState } from "react";
import './CountDown.css'


const CountDown = ({resetValues, payBet, textBar, setTextBar, resetAnimations , startAnimation, startGame}) => {


    const [seconds, setSeconds] = useState(15)
    const [milisseconds, setMilisseconds] = useState(59)


    useEffect(() => {
        const countDownSec = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds > 0 ? prevSeconds -1 : 0)
        }, 1000)

        return () => {
            clearInterval(countDownSec)
        }
    }, [])

    useEffect(() => {

        if(seconds > 0) {
            const countDownMSec = setInterval(() => {
                setMilisseconds(prevMSeconds => prevMSeconds > 0 ? prevMSeconds - 1 : 59)
            }, 17)
    
            return () => {
                clearInterval(countDownMSec)
    
            }
        }else {
            resetAnimations() 

            setTextBar("Girando...")
            startAnimation();


            setTimeout(() => {
                setTextBar("A bitabet girou!");

                payBet();
                resetValues();
                

                setTimeout(() => {



                    startGame();

                    setSeconds(15);
                }, 2000)

            }, 12000)

        }

    }, [seconds])

    
    

  return (
    <div style={textBar === "Girando..." ? {justifyContent: "center"} : {}}
    id="timer_container">
        <div>{textBar}</div>
        <div id="countdown_container">
            <div 
            style={textBar === "Girando..." || textBar === "A bitabet girou!" ? {display: "none"} : {}}>
                {seconds}
                </div>
            <div 
            style={textBar === "Girando..." || textBar === "A bitabet girou!" ? {display: "none"} : {}}>:</div>
            <div 
            style={textBar === "Girando..." || textBar === "A bitabet girou!" ? {display: "none"} : {}} id="milissec_container">{milisseconds}</div>
        </div>
    </div>
  );
};

export default CountDown;
