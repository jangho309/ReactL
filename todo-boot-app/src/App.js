import TodoInsert from "./components/TodoInsert";
import TodoTemplate from "./pages/TodoTemplate";
import TodoList from "./components/TodoList";
import { useCallback, useEffect, useReducer, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function App() {
	const [todos, setTodos] = useState([]);
	const navi = useNavigate();

	const addTodo = useCallback(async (text) => {
		try {
			const todo = {
				text: text,
				checked: false
			};

			const response = await axios.post('http://localhost:9090/todos', todo, {
				headers: {
					Authorization: `Bearer ${sessionStorage.getItem('ACCESS_TOKEN')}`
				}
			});

			setTodos(() => response.data.items);
		} catch(e){
			console.log(e);
		}
	}, [todos]);

	const getTodos = useCallback(async () => {
		try {
			const response = await axios.get('http://localhost:9090/todos', {
				headers: {
					Authorization: `Bearer ${sessionStorage.getItem('ACCESS_TOKEN')}`
				}
			});
			
			setTodos(() => response.data.items);
		} catch(e){
			console.log(e);
			if(e.response.status === 403){
				alert('로그인이 필요합니다.');
				navi("/");
			}
		}

	}, [todos]);

	useEffect(() => {
		getTodos();
	}, []);

	const removeTodo = useCallback(async (id) => {
		try {
			// getParams
			// const response = await axios.delete(`http://localhost:9090/todos/`, {
			// 	params: {
			// 		id: id
			// 	}
			// });
			const response = await axios.delete(`http://localhost:9090/todos/${id}`, {
				headers: {
					Authorization: `Bearer ${sessionStorage.getItem('ACCESS_TOKEN')}`
				}
			});

			setTodos(() => response.data.items);
		} catch(e){
			console.log(e);
		}
	}, [todos]);

	const changeChecked = useCallback(async (todo) => {
		try {
			const response = await axios.patch('http://localhost:9090/todos', todo, {
				headers: {
					Authorization: `Bearer ${sessionStorage.getItem('ACCESS_TOKEN')}`
				}
			});

			setTodos(() => response.data.items);
		} catch(e){
			console.log(e);
		}
	}, [todos]);

	return (
		<TodoTemplate>
			<TodoInsert addTodo={addTodo}/>
      		<TodoList todos={todos} removeTodo={removeTodo} changeChecked={changeChecked}/>
    	</TodoTemplate>
	);
}

export default App;
