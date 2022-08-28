import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../../redux-saga/actions";
import './todoInput.css';

const TodoInput = () => {
    const dispacth = useDispatch();
    const [title, setTitle] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
      inputRef.current.focus();
    })

      const enterValue = async(e) => {
       if(e.key === 'Enter') { 
        dispacth(addTodo.request({
          id: Math.round((Math.random() * 10) + 201),
          title: title,
          completed: true
        }))
        setTitle('')
      }
  }

    return (
        <div className='todoInput_container'>
        <h3>Hôm nay bạn có gì không?</h3>
        <div className='row'>
            <input
              className='input_todo' 
              type='text'
              value={title}
              placeholder='Thêm công việc...'
              onChange={(e) => setTitle(e.target.value)}
              ref = {inputRef}
              onKeyPress = {enterValue}
            />
            <button
              className='btn_todo'
              onClick={() => {
                dispacth(addTodo.request({
                    id: Math.round((Math.random() * 10) + 201),
                    title: title,
                    completed: true
                }))
                setTitle('')
              }}
            >Thêm mới</button>
        </div>
    </div>
    )
}

export default TodoInput;