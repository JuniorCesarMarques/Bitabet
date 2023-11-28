import React, { useEffect, useState } from "react";

const Timer = () => {

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
            setMilisseconds("00")
        }

        
    }, [seconds])



  return (
    <div id="timer_container">
        <div>Girando em</div>
        <div id="countdown_container">
            <div>{seconds}</div>
            <div>:</div>
            <div id="milissec_container">{milisseconds}</div>
        </div>
    </div>
  );
};

export default Timer;
