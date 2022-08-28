import React, {useState, useEffect} from 'react';
// import getTodoDatas from './api/todoApi';
import './App.css';
import TodoInput from './component/TodoInput/todoInput';
import TodoList from './component/TodoList/TodoList';

function App() {

  return (
    <div className="App">
        <TodoInput/>
        <TodoList/>
    </div>
  );
}

export default App;
