import React from 'react';

const TodoList = ({ todos, setTodos }) => {
    const handleDelete = ({id}) => {
        setTodos(todos.filter(todo=> todo.id !== id ))
    };
    
    return (
        <div>
            { todos.map(el =>
                <li className = 'list-item' key = { el.id }>
                    <input type = 'text'
                           value = { el.title }
                           className = 'list'
                           onChange = { e => e.preventDefault() }
                    />
                    <div>
                        <button className = 'button-complete task-button'>Complete</button>
                        <button className = 'button-edit task-button'>Edit</button>
                        <button onClick={()=> handleDelete(el.id)} className = 'button-delete task-button'>Delete</button>
                    </div>
                </li>
            ) }
        </div>
    );
};

export default TodoList;