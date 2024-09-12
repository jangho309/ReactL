import { createContext, useState } from "react";

const TodoContext = createContext({
    todos: [],
    setTodos: () => {}
});

export const TodoContextProvider = ({children}) => {
    const [todos, setTodos] = useState([]);

    const initialValue = {todos, setTodos};

    return (
        <TodoContext.Provider value={initialValue}>
            {children}
        </TodoContext.Provider>
    )
};

export const TodoContextConsumer = TodoContext.Consumer;

export default TodoContext;