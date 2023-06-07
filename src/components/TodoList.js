import React from 'react';

const TodoList = ({ todos, setTodos, setEditTodo }) => {

    const handleComplete = (todo) => {
        setTodos(
            todos.map(item=> {
                if(item.id=== todo.id) {
                    return {...item, completed: !item.completed}
                } return item
            })
        )
    };

    const handleEdit = ({id}) => {
        const findTodos = todos.find(todo=> todo.id === id)
        setEditTodo(findTodos)
    };

    const handleDelete = ({id}) => {
        setTodos(todos.filter(todo=> todo.id !== id ))
    };
    
    return (
        <div>
            { todos.map(todo =>
                <li className = 'list-item' key = { todo.id }>
                    <input type = 'text'
                           value = { todo.title }
                           className = { `list ${todo.completed ? 'complete' : ''}` }
                           onChange = { e => e.preventDefault() }
                    />
                    <div>
                        <button onClick={() => handleComplete(todo)} className = 'button-complete task-button'>Complete</button>
                        <button onClick={()=> handleEdit(todo)} className className = 'button-edit task-button'>Edit</button>
                        <button onClick={()=> handleDelete(todo)} className = 'button-delete task-button'>Delete</button>
                    </div>
                </li>
            ) }
        </div>
    );
};

export default TodoList;