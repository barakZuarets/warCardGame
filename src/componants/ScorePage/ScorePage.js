import React, {useState} from 'react'

export default function ScorePage(props) {
 
    const whoWin = ()=>{
        if(props.playerCards > 1)
            return 'The Player';
        else
            return "The Computer";
    }
    return (
        <div>
            <h3>and the winner is:</h3>
            <h4>{whoWin()}</h4>
            <button onClick={()=>{props.newGame()}}>Again?</button>
        </div>
    )
}
