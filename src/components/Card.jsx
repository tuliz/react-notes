import React from "react";
import '../css/Card.css';

const Card = (props) =>{
    
return <div className="card">
    
    <h1 id="title">{props.title}</h1>
    
    <p id="messege">{props.messege}</p>

    <button id="btnDelete" onClick={()=>{props.onDelete(props.id)}}>Delete</button>

</div>
}

export default Card;