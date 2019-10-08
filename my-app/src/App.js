import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <div className='topSection'>
        <div className='header'>
          <h1>Todo List</h1>
        </div>
        <div className="todoForm">
          <TodoForm />
        </div>
      </div>
        <TodoList/>

        <button>Clear</button>
    </div>
  );
}

export default App;
