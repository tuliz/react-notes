import '../css/InputArea.css';
import  React, {useState} from 'react';
const InputArea = (props) =>{
    const [card, setCard] = useState({
        title:"",
        messege:""
    });

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setCard(prevValue=>{return {...prevValue, [name]:value}})
    }

    const handleClick = (e) =>{
        props.onAdd(card);
        e.preventDefault();
        setCard("");

    }

    return <div className ="form">
        <form>
            <input name="title" value = {card.title} id="title" type="text" placeholder="Title" onChange={handleChange}/>
            <input id="messege" name="messege" value={card.messege} type="text" placeholder="Messege" onChange={handleChange}/>
            <button onClick = {handleClick}>Add</button>
        </form>
    </div>
}
export default InputArea;