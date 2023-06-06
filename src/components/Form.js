import React from 'react';



const Form = ({ input, setInput, todos, setTodos }) => {
    const onInputChange = (e) => {
        setInput(e.target.value);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit = { onFormSubmit }>
            <input type = 'text'
                   placeholder = 'Enter task name...'
                   className = 'task-input'
                   value = { input }
                   required
                   onChange = { onInputChange }
            />

            <button
                className = 'button-add'
                type = 'submit'
            >
                Add
            </button>
        </form>
    );
};

export default Form;