import React from 'react';

export default function ListItem({todo, deleteTodo, updateTodos}) {
    const {title, completed, id} = todo;
    return (
        <div className='list-item'>
           <span data-testid='todo-title' className={`${completed? 'red':'green'}`}>{title}</span>
           <div>
                <button aria-pressed="true" data-testid='btn-toggle' type='submit' onClick={()=> updateTodos(id)} >&#9996;</button>
                <button aria-pressed="false" data-testid='btn-toggle' type='submit' onClick={()=> updateTodos(id)} >&#9996;</button>
                <button data-testid={`btn-delete-${todo.id}`} type='submit' onClick={()=> deleteTodo(id)} >&#10006;</button> 
           </div>           
            
        </div>
    )
}
