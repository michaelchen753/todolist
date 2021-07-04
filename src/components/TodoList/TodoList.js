import React from 'react';
import ListItem from '../ListItem/ListItem';

export default function TodoList({todos, updateTodos, deleteTodo}) {
    return (
        <div className='todo-list'>
            <ol>
                {
                    todos.map((todo,index)=>{
                        return (
                            <li>
                                 <ListItem 
                                    key={todo.id} 
                                    todo={todo} 
                                    updateTodos={updateTodos} 
                                    deleteTodo={deleteTodo}                            
                                    />
                            </li>                           
                        )
                    })
                }
            </ol>    
        </div>
    )
};
