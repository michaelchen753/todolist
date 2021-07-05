import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList/TodoList';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');

  const newTodo = {
    userId:2,
    id:new Date().getTime().toString(),
    title:name,
    completed:[false, true][Math.floor(Math.random()*2)]
  };

  const addNewTodo = e =>{
    e.preventDefault();
    if(!name){
      alert('please enter a todo.');
    } else {
      setTodos([...todos, newTodo]);
      setName('');
    }    
  };

  const updateTodos = id =>{
    const todoLists = todos.map((todo)=>{
      if(todo.id === id) {
        const updatedTodo = {...todo, completed: !todo.completed };
        return updatedTodo;
      }
      return todo;
    });
    setTodos(todoLists);
  }

  const deleteTodo = id =>{
    const todosTobeKept = todos.filter(todo => todo.id !== id);
    setTodos(todosTobeKept);
  };
  const url = 'https://jsonplaceholder.typicode.com/todos';

  useEffect(()=>{
    const fetchData = async () => {      
      const response = await fetch(url);
      const data = await response.json();
      setTodos(data.slice(0,5)); 
      setLoading(false);
    };
    fetchData();
  },[])
  console.log('todos',todos);
  return (
    <div className="App">
      <h1 className="header">My todo list</h1>
      <div className='add-todo-form'>
        <form onSubmit={addNewTodo}>
          <label htmlFor="todo-title">Title:</label>
          <input 
          type='text' 
          onChange={e=>setName(e.target.value)}
            placeholder='enter todo here...'
          />
          <button type='submit'>Add new todo</button>
        </form>
      </div>
     { 
       loading? 
        <h2>Loading...</h2>:       
         <TodoList todos={todos} deleteTodo={deleteTodo} updateTodos={updateTodos}/>}       
    </div>
  );
}

export default App;
