import {createSlice} from '@reduxjs/toolkit';

// redux에서 관리하는 상태변수 선언
const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        // a: 1,
        // b: 2
    },
    reducers: {
        // reducer 함수
        get_todos: (state, action) => ({
            // a: 1,
            // b: 2
            ...state,
            // action 생성 함수에서 매개변수로 전달되는 값들은 모두 action 객체의
            // payload 속성에 담긴다.
            // response.data.items가 전달된다.
            todos: action.payload
        })
    }
});

// 위에서 지정한 reducer 함수명으로 action creator 메소드가 생성된다.
// action creator 메소드를 이용해서 dispatch를 한다.
export const {get_todos} = todoSlice.actions; 

export default todoSlice.reducer;