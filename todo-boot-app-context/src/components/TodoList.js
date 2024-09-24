import React, { useCallback, useContext, useEffect } from 'react';
import TodoListItem from './TodoListItem';
import '../scss/TodoList.scss';
import TodoContext, { TodoContextConsumer } from '../context/todocontext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TodoList = ({todos, removeTodo, changeChecked}) => {
	// Consumer만 사용하게 되면 context 값을 JSX에서만 사용할 수 있기 때문에
	// 리액트에서는 자바스크립트에서도 context 값에 접근할 수 있게
	// useContext라는 hook을 제공한다.
	const todoContext = useContext(TodoContext);
	const navi = useNavigate();
	
	const getTodos = useCallback(async () => {
		try {
			const response = await axios.get('http://localhost:9090/todos',{
				headers : {
					Authorization: `Bearer ${sessionStorage.getItem('ACCESS_TOKEN')}`
				}
			});

			todoContext.setTodos(() => response.data.items);
		} catch(e){
			if(e.response.status === 403){
				alert('로그인이 필요합니다.');
				navi('/login');
			}
		}
	}, [navi]);

	useEffect(() => {
		getTodos();
	}, []);

  	return (
		<TodoContextConsumer>
			{({todos}) =>
				<div className='TodoList'>
					{todos && todos.map(todo => 
						<TodoListItem key={todo.id} todo={todo}/>
					)}
				</div>
			}
		</TodoContextConsumer>
  	);
};

export default TodoList;