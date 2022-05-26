// import logo from './logo.svg';
import './App.css';
import {useState, useReducer} from 'react';

const ACTION = {
  ADD_TODO: 'add-todo'
}

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTION.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
  } 
}
  const newTodo = (name) => {
    return {id: Date.now(), name:name, complete:false}
  }


function App() {
  const [todos, dispatch] = useReducer(reducer,[])
  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({type: ACTION.ADD_TODO, payload: {name:name}})
    setName("")
  }

  console.log(todos)

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
    </form>
  );
}

export default App;
