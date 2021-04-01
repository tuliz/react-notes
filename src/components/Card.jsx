import React from "react";
import '../css/Card.css';
const Card = (props) =>{
    
return <div className="card">
    <h1 id="title">{props.title}</h1>
    <p id="messege">{props.messege}</p>
</div>
}

export default Card;