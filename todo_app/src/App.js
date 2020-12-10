import React, { useState } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from "./Todo";

function App() {
//Imagine in React, everything is component. 
//The app component returns html but this is jsx.
//jsx allow us, If we want to run some js, we can do that by simply adding {}
//JSX = JavaScript + HTML
  
//set the app useState is something that react gives us which set up short term memory 
  const [todos, setTodos] = useState(["Take dogs for a walk","Take the rubbish out"]);
  const [input, setInput] = useState("");
  
  const addTodo = (event) =>{
    event.preventDefault();
    //this will fire off when we click the button!!
    console.log("😍", "im working!!");
    setTodos([...todos, input]);
    setInput("");
  }
  return (
    <div className="App">
      <h1>hello world</h1>
      <FormControl>
        <InputLabel>✔ Write a Todo</InputLabel>
        <Input value={input} onChange={event =>setInput(event.target.value)} />
      </FormControl>

      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">Add Todo</Button>

      <ul>
        {todos.map(todo =>(
          <Todo text ={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
