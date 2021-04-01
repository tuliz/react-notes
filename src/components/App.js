import '../css/App.css';
import Header from './Header';
import InputArea from './InputArea';
import Card from './Card';
import Footer from './Footer'
import React, { useState } from 'react';

function App() {
  //---Cards State---
  const [cards, setCards] = useState([]);

  //Function for adding cards from input of user
  const addCard = (card =>{
    setCards(prev=>{return [...prev, card]});
  });

  //Function for Deleting a card after pressing delete button
  const deleteCard = (id) =>{
    setCards(prev=>{return prev.filter((card, index)=> {return (index!==id)})})
  }

  return (
    <div>
    <Header/>

    <InputArea onAdd = {addCard}/>
    
    {cards.map((card, index) =>{
      return <Card 
      key={index} 
      id={index} 
      onDelete={deleteCard} 
      title ={card.title} 
      messege = {card.messege}
    />
    })};
    

    <Footer/>
    </div>
  );
}

export default App;
