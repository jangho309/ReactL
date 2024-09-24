import {createSlice} from '@reduxjs/toolkit';
import { addTodo, changeChecked, getTodos, removeTodo } from '../apis/todoApis';

// redux에서 관리하는 상태변수 선언
const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        // a: 1,
        // b: 2
    },
    reducers: {
        
    },
    // 비동기 통신(ajax의 async 옵션을 true과 비슷한 원리?)
    // thunk는 extraReducers에서 처리한다.
    extraReducers: (builder) => {
        // thunk 상태에 따른 처리를 builder의 addCase라는 메소드를 이용해서 각각 추가한다.
        builder.addCase(getTodos.fulfilled, (state, action) => ({
            ...state,
            todos: action.payload
        }));
        builder.addCase(getTodos.rejected, (state, action) => {
            console.log(action.payload)
            if(action.payload.response.status === 403) {
                alert('로그인이 필요합니다.');
                window.location.href = '/login';
            }

            return state;
        });

        builder.addCase(addTodo.fulfilled, (state, action) => ({
            ...state,
            todos: action.payload
        }));
        builder.addCase(addTodo.rejected, (state, action) => {
            alert('에러가 발생했습니다.');
            return state;
        });

        builder.addCase(removeTodo.fulfilled, (state, action) => ({
            ...state,
            todos: action.payload
        }));
        builder.addCase(removeTodo.rejected, (state, action) => {
            console.log(action);
            alert('에러가 발생했습니다.');
            return state;
        });

        builder.addCase(changeChecked.fulfilled, (state, action) => ({
            ...state,
            todos: action.payload
        }));
        builder.addCase(changeChecked.rejected, (state, action) => {
            console.log(action);
            alert('에러가 발생했습니다.');
            return state;
        });
    }
});

// 위에서 지정한 reducer 함수명으로 action creator 메소드가 생성된다.
// action creator 메소드를 이용해서 dispatch를 한다.
export const {get_todos} = todoSlice.actions; 

export default todoSlice.reducer;