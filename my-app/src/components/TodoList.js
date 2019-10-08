import React, { useReducer } from 'react';
import { initialState, reducer } from '../reducers/Reducer';

const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state, dispatch)

    return (
        <div className="list-container">
            <p>Todo: {state.item}</p> 
        </div>
    );
}

export default TodoList;