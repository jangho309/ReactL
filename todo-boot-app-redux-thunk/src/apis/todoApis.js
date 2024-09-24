import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

// createAsyncThunk로 비동기 처리하는 메소드 생성
export const getTodos = createAsyncThunk(
    // type 지정
    'todos/getTodos',
    // promise 기반의 결과를 반환하는 action
    // 아래 메소드에서 반환되는 값이 action의 payload 속성 값으로 담긴다.
    async(_, thunkApi) => {
        try {
            const response = await axios.get('http://localhost:9090/todos',{
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('ACCESS_TOKEN')}`
                }
            });

            return response.data.items;
        } catch(e){
            /**
             * thunk에는 3가지 상태값이 존재한다.
             * pending: 비동기 통신 작업이 처리중인 상태
             * fulfilled: 비동기 통신 작업이 완료된 상태
             * rejected: 비동기 통신 작업이 실패한 상태
             * reducer에서 위 세 가지 상태에 따라서 케이스를 각각 생성한다.
             */
            return thunkApi.rejectWithValue(e);
        }   
    }
)

export const addTodo = createAsyncThunk(
    'todos/addTodo',
    async (text, thunkApi) => {
        try {
            const response = await axios.post('http://localhost:9090/todos', {
                text: text,
                checked: false
            }, {
                headers : {
                    Authorization: `Bearer ${sessionStorage.getItem('ACCESS_TOKEN')}`
                }
            });

            return response.data.items;
        } catch(e){
            return thunkApi.rejectWithValue(e);
        }
    }
)

export const removeTodo = createAsyncThunk(
    'todos/removeTodo',
    async (id, thunkApi) => {
        try {
            const response = await axios.delete(`http://localhost:9090/todos/${id}`, {
                headers : {
                    Authorization: `Bearer ${sessionStorage.getItem('ACCESS_TOKEN')}`
                }
            });

            return response.data.items;
        } catch(e){
            return thunkApi.rejectWithValue(e);
        }
    }
);

export const changeChecked = createAsyncThunk(
    'todos/changeChecked',
    async (todo, thunkApi) => {
        try {
            const response = await axios.patch(`http://localhost:9090/todos`, todo, {
                headers : {
                    Authorization: `Bearer ${sessionStorage.getItem('ACCESS_TOKEN')}`
                }
            });

            return response.data.items;
        } catch(e){
            return thunkApi.rejectWithValue(e);
        }
    }
)