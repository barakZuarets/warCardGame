import React, {useState} from 'react'
import './Card.css'
export default function Cards(props) {
    return (<div class='div1' id={props.thisCard.symbol === "♦" || props.thisCard.symbol === "♥" ? "red" : "black"}>
        
            {/* <h3 id='n1'>{props.thisCard.number}</h3>
            <h1 id='n2'>{props.thisCard.symbol}</h1>
            <h3 id='n3'>{props.thisCard.number}</h3> */}
            <div id='n1'>{props.thisCard.number}</div>
            <div id='n2'>{props.thisCard.symbol}</div>
            <div id='n3'>{props.thisCard.number}</div>
            </div> 
        
    )
}
