import React, {useState, useReducer } from 'react';
import './App.css';
//components
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'

import { initialState, reducer } from './reducers/Reducer';



function App() {
  // const [todo, setTodo] = useState();
  const [state, dispatch]= useReducer(reducer, initialState);

  return (
    <div className="App">
      <div className="header">
        <h2>Todo List</h2>
        <TodoForm 
            state={state.todoData}
            dispatch={dispatch}
        />
      </div>
      <TodoList
          todoItem={state.todoData}
          dispatch={dispatch}
        />
        <button className="clear-btn" onClick={() => dispatch({type: 'CLEAR_ITEM'})}>Clear Completed</button>
    </div>
  );
}
export default App;