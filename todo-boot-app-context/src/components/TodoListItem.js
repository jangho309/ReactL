import React, { useCallback, useContext } from 'react';
import { MdCheckBoxOutlineBlank, MdRemoveCircleOutline, MdCheckBox } from 'react-icons/md';
import '../scss/TodoListItem.scss';
import cn from 'classnames';
import axios from 'axios';
import TodoContext from '../context/todocontext';

const TodoListItem = ({todo}) => {
  const {id, text, checked} = todo;
  const todoContext = useContext(TodoContext);

  const removeTodo = useCallback(async () => {
    try {
      const response = await axios.delete(`http://localhost:9090/todos/${id}`,
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
  }, [id]);

  const changeChecked = useCallback(async () => {
    try {
      const response = await axios.patch('http://localhost:9090/todos', todo, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('ACCESS_TOKEN')}`
        }
      });

      todoContext.setTodos(() => response.data.items);
    } catch(e) {
      console.log(e);
    }
  }, [todo]);

  return (
    <div className='TodoListItem'>
      {/**
       * classnames 라이브러리를 이용해서 조건부 클래스명 적용
       * todo객체의 checked 속성이  true일 경우에 속성명과 동일한 클래스명이 적용된다.
       */}
        <div className={cn('checkbox', {checked})} onClick={() => changeChecked(todo)}>
            {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
            <div className='text'>{text}</div>
        </div>
        <div className='remove' onClick={() => removeTodo(id)}>
            <MdRemoveCircleOutline/>
        </div>
    </div>
  );
};

export default TodoListItem;