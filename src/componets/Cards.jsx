import React from 'react';
import "./Cards.css"

const Cards = ({ animationCards }) => {

const whitePositions = [4, 10, 20, 39, 45, 60, 75, 89]
const cards = []
    for(let i = 0; i < 50; i++) {

    cards.push({color: "#323B45"})
    cards.push({color: "#F12C4C"})

}


return ( 
    <div style={animationCards} className='cards_container'>
        {cards.map((card, index) => 
            <div key={index}
            style={whitePositions.includes(index) ? {backgroundColor: "white"} :{backgroundColor: cards[index].color}}></div>
        )}
    </div>
    );
}
 
export default Cards