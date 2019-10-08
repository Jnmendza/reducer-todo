import React from 'react';
// import Reducer from '../reducers/Reducer';

const TodoForm = () => {

    
        return (
            <form >
                <input className="input" type="text" />
                <button className="add-btn" onClick={() => dispatchEvent({ type: 'ADD_NEW_TODO_ITEM'})}>Add Task</button>
            </form>
        );
    }


export default TodoForm 