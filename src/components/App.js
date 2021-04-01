import '../css/App.css';
import Header from './Header';
import InputArea from './InputArea';
import Card from './Card';
import Footer from './Footer'
import React, { useState } from 'react';

function App() {
  const [cards, setCards] = useState([]);

  const addCard = (card =>{
    setCards(prev=>{return [...prev, card]});
  })
  return (
    <div>
    <Header/>
    <InputArea onAdd = {addCard}/>
    {cards.map(card =>{
      return <Card title ={card.title} messege = {card.messege}/>
    })};
    <Footer/>
    </div>
  );
}

export default App;
