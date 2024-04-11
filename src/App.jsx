import { useState, useEffect } from 'react'
import TestData from './TestData'
import Card from './components/Card'
import './App.css'

function App() {

  const [chosenCards, setChosenCards] = useState([])

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const pickCard = (name) => {
    if(chosenCards.includes(name)) {            
        setChosenCards([]);
        setScore(0);
    } else {
        setChosenCards(prevChosenCards => [...prevChosenCards, name])
        setScore(score => score +1)
    }
  }

  useEffect(() => {
    if(score > highScore) {
      setHighScore(score);
    }
  }, [score, highScore]);

  const createCards = () => {
    const TestDataCopy = [...TestData];
    const cards = [];
    for(let i=0; i<TestData.length; i++) {
      const randomIndex = Math.floor(Math.random() * TestDataCopy.length);
      cards.push(
        <Card 
          key={i} 
          index={randomIndex}
          name={TestDataCopy[randomIndex].name} 
          pic={TestDataCopy[randomIndex].imgSrc} 
          pickCard={pickCard}
        />
      
      );
      TestDataCopy.splice(randomIndex, 1)
    }
    return cards
  };




  return (
    <>
      <div id="header">
        <h1>Memorization Game</h1>
        <h3>Score: {score}</h3>
        <h3>Score: {highScore}</h3>
      </div>
      <div id="cards">
        {createCards()}
      </div>
     
    </>
  )
}

export default App
