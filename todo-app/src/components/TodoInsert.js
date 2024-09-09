import React, {useState, useCallback} from 'react';
import {MdAdd} from 'react-icons/md';
import '../scss/TodoInsert.scss';

const TodoInsert = ({addTodo}) => {
    const [text, setText] = useState('');

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        addTodo(text);
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