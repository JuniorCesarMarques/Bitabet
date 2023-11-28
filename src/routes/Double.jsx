import React from "react";
import NormalAuto from "../componets/NormalAuto";
import BetValue from "../componets/BetValue";
import ColorSelector from "../componets/ColorSelector";
import StartButton from "../componets/StartButton";
import BarProgress from "../componets/BarProgress";

const Double = () => {
    return(
        <>
        <div id="previous_cards"></div>
        <div id="actual_cards">
        <BarProgress />
        </div>
        <NormalAuto />
        <BetValue />
        <ColorSelector />
        <StartButton />
        </>
        
    )
}

export default Double