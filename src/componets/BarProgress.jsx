import React from "react";
import CountDown from "./CountDown";

const BarProgress = () => {
    return(
        <div id="bar_container">
            <CountDown />
            <div id="bar"></div>
        </div>
    )
}

export default BarProgress