import TodoInsert from "./components/TodoInsert";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";
import {useState, useRef, useCallback} from 'react';
import {produce} from 'immer'

const createBulk = () => {
  const todoArray = [];

  for(let i = 1; i <= 2500; i++){
    const todo = {
      id: i,
      text: `할일 ${i}`,
      checked: false
    }

    todoArray.push(todo);
  }

  return todoArray;
}

function App() {
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: '리액트 공부하기',
  //     checked: false,
  //   },
  //   {
  //     id: 2,
  //     text: '자바스크립트 공부하기',
  //     checked: true,
  //   },
  //   {
  //     id: 3,
  //     text: 'Spring Boot 공부하기',
  //     checked: true,
  //   },
  // ]);

  // const todoId = useRef(4);

  const [todos, setTodos] = useState(createBulk);

  const todoId = useRef(2501);

  // 할 일을 추가하는 메소드
  const addTodo = useCallback((text) => {
    const newTodo = {
      id: todoId.current,
      text: text,
      checked: false,
    }

    // setTodos(
    //   todos.concat(newTodo)
    // );

    // 최적화 2: setter메소드의 매개변수로 화살표함수 전달.
    setTodos(
      () => todos.concat(newTodo)
    );

    todoId.current += 1;
  }, [todos]);

  const removeTodo = useCallback((id) => {
    // setTodos(
    //   produce(
    //     draft => draft.filter(todo => todo.id !== id))
    // );
    // 최적화 2: setter메소드의 매개변수로 화살표함수 전달.
    setTodos(
      () => todos.filter(todo => todo.id !== id)
    );
  }, [todos]);

  const changeChecked = useCallback((id) => {
    // setTodos(
    //   produce(
    //     draft => draft.map(
    //       todo => todo.id === id
    //               ? {...todo, checked: !todo.checked}
    //               : todo
    //     )
    //   )
    // )
    setTodos(
      // setter 메소드에 화살표함수를 매개변수로 전달하면
      // 화살표함수의 매개변수를 선언하면 해당 매개변수는
      // state의 이전상태를 가져오는 매개변수가 된다.
      (prev) => todos.map(
        todo => todo.id === id
              ? {...todo, checked: !todo.checked}
              : todo
      )
    )
  }, [todos]);

  return (
    <TodoTemplate>
      <TodoInsert addTodo={addTodo}/>
      <TodoList todos={todos} removeTodo={removeTodo} changeChecked={changeChecked}/>
    </TodoTemplate>
  );
}

export default App;
