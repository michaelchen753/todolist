import React from 'react';

export default function ListItem({todo, deleteTodo, updateTodos}) {
    const {title, completed, id} = todo;
    return (
        <div>
           <span>{title}</span>
           <span className={`${completed? 'green':'red'}`}>completed</span>
           <button type='submit' onClick={()=> updateTodos(id)} >&#10067;</button>
           <button type='submit' onClick={()=> deleteTodo(id)} >&#10006;</button>  
        </div>
    )
}
