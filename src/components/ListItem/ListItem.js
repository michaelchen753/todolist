import React from 'react';

export default function ListItem({todo, deleteTodo, updateTodos}) {
    const {title, completed, id} = todo;
    return (
        <div className='list-item'>
           <span className={`${completed? 'red':'green'}`}>{title}</span>
           <div>
               <button type='submit' onClick={()=> updateTodos(id)} >&#9986;</button>
                <button type='submit' onClick={()=> deleteTodo(id)} >&#10006;</button> 
           </div>           
            
        </div>
    )
}
