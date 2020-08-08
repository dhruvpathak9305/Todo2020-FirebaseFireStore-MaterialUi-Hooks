import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Todo from './Todo'
import "./App.css";

import { db } from "./firebase"
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState("");

  //When the app loads, we need to listen to the database and fetch new todos as they get added or removed.

  useEffect(() => {

    //docs is that single todo that is added

    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {

      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })))

    })
  }, [])

  //we need to get the firebase timestamp. Google this.

  const addTodo = (e) => {
    e.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setTodos([...todos, input]);
    setInput("");

  };

  return (
    <div className="App">
      <h1>Hello Clever Programmers </h1>
      {/*<form action="">
        <input
          type="text"
          name=""
          id=""
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
<button type="submit" onClick={addTodo}>
          Add todo
        </button>  </form>*/}
      <form>
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
