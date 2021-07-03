import React from 'react';
import ListItem from '../ListItem/ListItem';

export default function TodoList({todos, updateTodos, deleteTodo}) {
    return (
        <div className='todo-list'>
            {
                todos.map((todo,index)=>{
                    return (
                        <ListItem 
                        key={todo.id} 
                        todo={todo} 
                        updateTodos={updateTodos} 
                        deleteTodo={deleteTodo}                            
                        />
                    )
                })
            }
        </div>
    )
};
