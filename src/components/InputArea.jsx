import '../css/InputArea.css';
import {Form, FormControl, Button, Row, Col} from 'react-bootstrap';
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

    return <Form>

        <Col lg={6}>
          <FormControl
            className="bg-dark"
            name ="title" 
            value = {card.title} 
            id ="title" 
            type ="text" 
            placeholder = "Title" 
            onChange = {handleChange}
            />
        </Col>
        
        <Col lg={6}>
            <FormControl 
            className="bg-dark" 
            id ="messege" 
            name ="messege" 
            value = {card.messege} 
            type ="text" 
            placeholder ="Messege" 
            onChange = {handleChange}
            />
        </Col>   
            
            <Col lg={2}>
            <Button 
            class ="btn btn-primary"
            type="submit" 
            id = "btnAdd" 
            onClick = {handleClick}>
            Add
            </Button>
            </Col>

        </Form>
}
export default InputArea;