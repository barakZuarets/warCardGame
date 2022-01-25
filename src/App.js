
import './App.css';
import React, {useState} from 'react'
import HomePage from './componants/HomePage/HomePage';
import GamePage from './componants/GamePage/GamePage';
import ScorePage from './componants/ScorePage/ScorePage';

function App() {

  
  const [player,setPlayer]=useState({});
  const [pages,setPages]=useState(0);
  const [playerDeck,setPlayerDeck]= useState([])
  const [computerDeck,setComputerDeck]= useState([])
  const [computerCards,setCC]=useState();
  const [playerCards,setPC]=useState();

  const updateCards = ()=>{
    setPC(playerDeck.length);
    setCC(computerDeck.length);
  }

  const createDeck = ()=>{
    let temp =[];
    let rnd1;
    let compDeck=[];
    let playerDeck=[];

    for (let i=1;i<=13;i++)
    {
      temp.push({number:i , symbol : '♠'})
    }
    for (let i=1;i<=13;i++)
    {
      temp.push({number:i , symbol : '♦'})
    }
    for (let i=1;i<=13;i++)
    {
      temp.push({number:i , symbol : '♣'})
    }
    for (let i=1;i<=13;i++)
    {
      temp.push({number:i , symbol : '♥'})
    }
    

    for(let i=0;i<26;i++)
    {
      rnd1 = Math.floor(Math.random()*temp.length);
      compDeck.push(temp[rnd1]);
      temp.splice(rnd1,1)

      rnd1 = Math.floor(Math.random()*temp.length);
      playerDeck.push(temp[rnd1]);
      temp.splice(rnd1,1)
    }

    setPlayerDeck([...playerDeck]);
    setComputerDeck([...compDeck]);
  }

  const initPlayer = (name) =>{
    if (name.length > 0){
      setPlayer({fullName :name})
      createDeck()
      setPages(1)
    }
    else{
      alert('Error');
    }
  }

  const switchPages = () => {
    if (pages == 0){
      return <HomePage validName={initPlayer}/>
    } 
    else if(pages == 1 ){
      return <GamePage tai={tai} playerCards={playerCards} computerCards={computerCards} updateCards={updateCards} playerDeck={playerDeck} playerName = {player.fullName} computerDeck = {computerDeck} finishGame = {finishGame} playerWin={playerWin} computerWin={computerWin}/>
    }
    else{
      return <ScorePage playerCards={playerCards} newGame ={newGame} />
    }
  }

  const finishGame =()=>{
    setPages(2);
  }

  const newGame = ()=>{
    createDeck();
    setPages(1);
  }

  const playerWin = (numberOfCards)=>{
    let temp1 = playerDeck;
    let temp2 = computerDeck;

    for(let i=0;i<numberOfCards;i++ ){
      temp1.push(temp1[i]);
      temp1.push(temp2[i]);
    }
    temp2.splice(0,numberOfCards);
    temp1.splice(0,numberOfCards);

    setPlayerDeck(temp1);
    setComputerDeck(temp2);
  }

  const computerWin = (numberOfCards)=>{
    let temp1 = playerDeck;
    let temp2 = computerDeck;

    for(let i=0;i<numberOfCards;i++ ){
      temp2.push(temp2[i]);
      temp2.push(temp1[i]);
    }
    temp2.splice(0,numberOfCards); 
    temp1.splice(0,numberOfCards);

    setPlayerDeck(temp1);
    setComputerDeck(temp2);
  }

  const tai =()=>{
    let temp1 = playerDeck;
    let temp2 = computerDeck;
      temp2.push(temp2[0]);
      temp1.push(temp1[0]);
    
    temp2.splice(0,1); 
    temp1.splice(0,1);

    setPlayerDeck(temp1);
    setComputerDeck(temp2);
  }

  return (
    <div className="App">
      {switchPages()}
      
      
    </div>
  );
}

export default App;
