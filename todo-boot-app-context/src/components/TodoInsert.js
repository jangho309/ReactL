import React, {useState, useCallback, useContext} from 'react';
import {MdAdd} from 'react-icons/md';
import '../scss/TodoInsert.scss';
import TodoContext from '../context/todocontext';
import axios from 'axios';

const TodoInsert = () => {
    const [text, setText] = useState('');
    const todoContext = useContext(TodoContext);

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

        todoContext.setTodos(() => response.data.items);
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