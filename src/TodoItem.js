import React from 'react'
import {db} from "./config/firebase"
import { deleteDoc,doc } from "firebase/firestore";

export const TodoItem = ({title,key}) => {
    // const deleteTodo = async (key)=>{
    //     const todoDoc = doc(db,"todosApp",key)
    //     await deleteDoc(todoDoc)
    
    //   } 

  return (
    <>
    <h1>{title}</h1>
    <h1>{key}</h1>
    {/* <button onClick={()=>console.log(key)}>Delete</button> */}
    </>
  )
}
