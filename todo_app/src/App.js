import React, { useState } from 'react';
import './App.css';

function App() {
//Imagine in React, everything is component. 
//The app component returns html but this is jsx.
//jsx allow us, If we want to run some js, we can do that by simply adding {}
//JSX = JavaScript + HTML
  
//set the app useState is something that react gives us which set up short term memory 
  const [todos, setTodos] = useState(["Take dogs for a walk","Take the rubbish out"]);
  const [input, setInput] = useState("");
  
  const addTodo = (event) =>{
    //this will fire off when we click the button!!
    console.log("😍", "im working!!")
  }
  return (
    <div className="App">
      <h1>hello world</h1>
      <input value={input} onChange={event =>setInput(event.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map(todo =>(
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
