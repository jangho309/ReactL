import React, {useState, useCallback} from 'react';
import {MdAdd} from 'react-icons/md';
import '../scss/TodoInsert.scss';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { get_todos } from '../slices/todoSlice';

const TodoInsert = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const addTodo = useCallback(async () => {
      try {
        const response = await axios.post('http://localhost:9090/todos',
          {
            text: text,
            checked: false
          },
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem('ACCESS_TOKEN')}`
            }
          }
        );

        dispatch(get_todos(response.data.items));
      } catch(e) {
        console.log(e);
      }
    }, [text]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        addTodo();
        setText('');
    }, [addTodo, text]);

  return (
    <form className='TodoInsert' onSubmit={handleSubmit}>
        <input type='text'
               placeholder='일정을 입력하세요'
               value={text}
               onChange={(e) => setText(e.target.value)}></input>
        <button type='submit'>
            <MdAdd/>
        </button>
    </form>
  );
};

export default TodoInsert;