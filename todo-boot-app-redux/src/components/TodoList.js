import React, {useCallback, useEffect} from 'react';
import TodoListItem from './TodoListItem';
import '../scss/TodoList.scss';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { get_todos } from '../slices/todoSlice';

const TodoList = () => {
  // useSelector로 store에 저장되어 있는 상태변수 중에 원하는 상태변수를 선택한다.
  // state에는 store.js에 지정한 ReducerRoot 객체가 저장되어 있다.
  const todos = useSelector(state => state.todoSlice.todos);
  const member = useSelector(state => state.memberSlice);
  // useDispatch로 dispatch 메소드 생성
  const dispatch = useDispatch();
  const navi = useNavigate();

  const getTodos = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:9090/todos', {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('ACCESS_TOKEN')}`
        }
      });

      // {type: 'get_todos', payload: response.data.items}
      dispatch(get_todos(response.data.items));
    } catch(e) {
      if(e.response.status === 403) {
        alert('로그인이 필요합니다.');
        navi('/login');
      }
    }
  }, [navi, dispatch]);

  useEffect(() => {
    alert(`${member.username}님 환영합니다.`);
    getTodos();
  }, []);

  return (
    <div className='TodoList'>
        {todos && todos.map(todo => 
            <TodoListItem key={todo.id} todo={todo}/>
        )}
    </div>
  );
};

export default TodoList;