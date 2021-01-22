
import './App.css';
import TextField from '@material-ui/core/TextField';
import { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { db } from './firebase_config';
import firebase from "firebase";
import TodoListItem from "./Todo";
function App() {

  const [todo, setTodos]=useState([]);
  const [todoInput,setTodoInput]=useState("");

    useEffect(()=>{
      getTodos();
    },[]);

    function getTodos(){
      db.collection("todo").onSnapshot(function(querySnapshot){
        setTodos(
          querySnapshot.docs.map((doc)=>({
            id:doc.id,
            todo:doc.data().todo,
            inprogress:doc.data().inprogress,
          }))
        );
        
   });
     }

  function addTodo(e){
    e.preventDefault();
    db.collection("todo").add({
      inprogress:true,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      todo:todoInput,
    });

    setTodoInput("");

  }
    
  

  return (
    <div 
    className="App"
      style={{
       display:"flex",
       flexDirection:"column",
       justifyContent:"center",
       alignItems:"center",
       width:"100%",
       
       }}
     >
     <div>
      <h1>WELCOME TO YOUR TODO-APP 😎 </h1>
      </div>
      <form>
      <TextField id="standard-basic" 
      label="WRITE A TODO!"
      style={{maxwidth:"200px",width:"40vw"}}
      value={todoInput}
      onChange={(e)=>setTodoInput(e.target.value)} 
      
      />
      <Button type="submit" variant="contained" onClick={addTodo}>ADD</Button>
      </form>
      
       
       <div>
      {todo.map((todo)=>(
      <TodoListItem
      todo={todo.todo} inprogress={todo.inprogress} id={todo.id}
      />
      ))}
      </div>
      </div>
   
    
    
  );
      }
    
export default App;
