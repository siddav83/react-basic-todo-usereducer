import React from 'react';
import { ACTION } from './App'

export default function Todo({todo, dispatch}) {
    return(
        <div>
            <span style={{color : todo.complete ? '#AAA': '#000'}}>{todo.name}
            {todo.name}
            </span>
            <button onClick={()=>dispatch({type: ACTION.TOGGLE_TODO, payload: {id: todo.id}})}>Toggle</button>
            <button onClick={()=>dispatch({type: ACTION.TOGGLE_TODO, payload: {id: todo.id}})}>Delete</button>
        </div>
    )
}