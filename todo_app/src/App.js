import React, { useEffect,useState } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from "./Todo";
import db from "./firebase";
import firebase from 'firebase';



function App() {
//Imagine in React, everything is component. 
//The app component returns html but this is jsx.
//jsx allow us, If we want to run some js, we can do that by simply adding {}
//JSX = JavaScript + HTML
  
//set the app useState is something that react gives us which set up short term memory 
  const [todos, setTodos] = useState(["abc"]);
  const [input, setInput] = useState("");
  
//When the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(()=>{
    //this code here... fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot=>{
      setTodos(snapshot.docs.map(doc=> doc.data().text))
    })
  }, [])

  const addTodo = (event) =>{
    event.preventDefault();
    //add to the firebase database
    db.collection("todos").add({
      text: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    //clear up the input after clicking add todo button
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
