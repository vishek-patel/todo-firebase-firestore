import React from 'react'
import {TodoItem} from './TodoItem'

export const Todo = ({todos}) => {
  return (
    <div>
        
        {
            todos.map((temp)=>{
                return <TodoItem title={temp.todo} key={temp.id} />
            })
        }
      

    </div>
  )
}
