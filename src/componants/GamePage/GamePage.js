
import React, {useState} from 'react'
import './GamePage.css'
import Cards from '../Cards/Cards'

export default function GamePage(props) {
    const [index,setIndex] = useState(0);
    const [winner,setWinner] = useState();
    const [compPoints,SetCompPoints]=useState(0);
    const [playerPoints,SetPlayerPoints]=useState(0);
    const sendCardValue1 = ()=>{
        return props.playerDeck[index];
    }

    const sendCardValue2 = ()=>{
        return props.computerDeck[index];
    }
    const sendCardValue3 = ()=>{
        return props.playerDeck[index+2];
    }

    const sendCardValue4 = ()=>{
        return props.computerDeck[index+2];
    }

    

    props.updateCards();

    const check = ()=>{
        if (sendCardValue1().number > sendCardValue2().number){
            setWinner('player win');
            SetCompPoints(compPoints+1);
            props.computerWin(1);
        }
            
        else if (sendCardValue1().number < sendCardValue2().number){
                setWinner('computer win');
                SetPlayerPoints(playerPoints+1);
                props.playerWin(1);
        }
            else{
                setWinner('tai');
                alert('1.. 2... 3..')
                if (sendCardValue3().number > sendCardValue4().number){
                    setWinner('player win');
                    SetCompPoints(compPoints+1);
                    props.computerWin(2);
                }
                    
                else if (sendCardValue3().number < sendCardValue4().number){
                        setWinner('computer win');
                        SetPlayerPoints(playerPoints+1);
                        props.playerWin(2);
                }
                else
                props.tai();
            }
            
        if (props.computerCards <= 1 || props.playerCards <= 1 )
            props.finishGame();
         else
                  setIndex(index)
             
        
        
    }

    return (
        <div className='table'> 
            <h1 className='title'>GamePage</h1>
            <h3>Computer </h3>

            <div className='div2' onClick={()=>{check()}}><h3>{props.computerCards}</h3></div>
            <Cards thisCard={sendCardValue1()} />
            <br />
            <Cards thisCard={sendCardValue2()} />
            
            <div className='div3' onClick={()=>{check()}} ><h3>{props.playerCards}</h3></div>
            <h3>{props.playerName} </h3>
            

            
        </div>
    )
}
