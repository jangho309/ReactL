import React, {useState, useCallback} from 'react';
import {MdAdd} from 'react-icons/md';
import '../scss/TodoInsert.scss';
import { useDispatch } from 'react-redux';
import { addTodo } from '../apis/todoApis';

const TodoInsert = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        dispatch(addTodo(text));
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