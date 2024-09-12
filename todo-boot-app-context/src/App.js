import TodoInsert from "./components/TodoInsert";
import TodoTemplate from "./pages/TodoTemplate";
import TodoList from './components/TodoList';
import { TodoContextProvider } from "./context/todocontext";

function App() {
  return (
    <TodoContextProvider>
      <TodoTemplate>
        <TodoInsert/>
        <TodoList/>
      </TodoTemplate>
    </TodoContextProvider>
  );
}

export default App;
