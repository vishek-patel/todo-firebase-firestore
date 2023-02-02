import logo from './logo.svg';
import './App.css';
// import { TextField } from '@material-ui/core';
import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import {db} from "./config/firebase"
// import { Todo } from './Todo';
//getdocs import
import { getDocs, collection,addDoc,serverTimestamp,deleteDoc,doc } from "firebase/firestore";

// import cors from 'cors';

// const url = 'https://firestore.googleapis.com/google.firestore.v1.Firestore/Listen/channel';

// fetch(cors(url))
//   .then(response => response.json())
//   .then(data => {
//     // do something with the data
//   });



function App() {


  const [todo, setTodo] = useState([])
  const [input , setInput] = useState("")

  const todoListRef = collection(db,"todosApp")

  const getTodoList = async()=> {
    try{
      const todoList = await getDocs(todoListRef);
      const filteredData = todoList.docs.map((temp)=>{
        return {
          id: temp.id,
          ...temp.data()
        }
      })
      console.log(filteredData[0])
      setTodo(filteredData)
    }
    catch(error){
      console.log(error)
    }

  }

  useEffect(()=>{

    getTodoList()

  },[])


  const deleteTodo = async (id)=>{
    const todoDoc = doc(db,"todosApp",id)
    await deleteDoc(todoDoc)
    getTodoList()

  } 

 
  const submitFunction = (e) => {
    e.preventDefault();
    //add to firebase
    const addTodo = async()=>{
      try{
        await addDoc(todoListRef,{ 
          todo:input,
          timestamp:serverTimestamp(),
          inProgress:true
        })
        getTodoList()
        }
      catch(error){
        console.log(error)
      }
    }
    addTodo()
    setInput("")
  }

  return (
    <div className="App">
     <h1 className="todo-heading">Todo app by Vishek</h1>
     <form>

     <TextField id="standard-basic" label="Write something here..." variant="standard" 
      value={input}
      onChange={(e) => setInput(e.target.value)}

      />
      <Button variant="contained" 
      color="primary"
      style={{marginLeft: 10,display:"none" }}
      type="submit"
      onClick={submitFunction}
      >
      Add
      </Button>
        </form>
    <div className="todo-container">
        {todo.map((temp)=>(
              <div className="todo-items">
                <h1 className='todo-title'>{temp.todo}</h1>
                <button className='todo-delete-btn' onClick={()=>deleteTodo(temp.id)}>Delete</button>
                {/* <h1>{temp.id}</h1> */}
              </div>
            ))}
        {/* <Todo  todos={todo} /> */}

          </div>
    </div>
  );
}

export default App;
