import { useState, useEffect } from 'react'
import TestData from './TestData'
import Card from './components/Card'
import './App.css'

function App() {


  //const cardCount = 6;
  const createCards = () => {
    const TestDataCopy = [...TestData];
    console.log(TestDataCopy);
    const cards = [];
    for(let i=0; i<TestData.length; i++) {
      const randomIndex = Math.floor(Math.random() * TestDataCopy.length);
      cards.push(
        <Card 
          key={i} 
          index={randomIndex}
          name={TestDataCopy[randomIndex].name} 
          pic={TestDataCopy[randomIndex].imgSrc} 
        />
      
      );
      TestDataCopy.splice(randomIndex, 1)
    }
    return cards
  };


  return (
    <>
      <div id="cards">
        {createCards()}
      </div>
     
    </>
  )
}

export default App
