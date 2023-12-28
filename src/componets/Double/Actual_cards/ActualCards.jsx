import React from 'react';
import Cards from '../Cards/Cards'
import BarProgress from '../Bar_progress/BarProgress';
import './ActualCards.css'

const ActualCards = ({resetValues ,payBet, textBar, setTextBar, startAnimation, animationCards }) => {
    return ( 
        <div id="actual_cards">

        <BarProgress 
        resetValues={resetValues}
        payBet={payBet}
        textBar={textBar}
        setTextBar={setTextBar}
        startAnimation={startAnimation}/>

        <span 
        style={{color: "white"}}
        className="material-symbols-outlined arrow">
        keyboard_double_arrow_down
        </span>

            <Cards animationCards={animationCards}/>

        </div>
     );
}
 
export default ActualCards;