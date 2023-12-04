import React from 'react';
import './PreviousCards.css'

const PreviousCards = ({ previousCards }) => {
    return ( 
        <div className="previous_cards">
            {previousCards.map((card, index) => <div key={index} style={card} className='card'></div>)}
        </div>
     );
}
 
export default PreviousCards;