import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

// action 함수는 thunk메소드를 쓰는 함수 -> return을 해야 payload 값을 받아올 수 있음
// {type: 'members/join', payload: response.data.item or e}
// memberApis -> memberSlice
export const join = createAsyncThunk(
    'members/join',
    async (member, thunckApi) => {
        try {
            const response = await axios.post('http://localhost:9090/members/join', member);
            // 리턴 필수!!! slice의 builder.addCase로 호출되면서 payload 값으로 들어감
            return response.data.item;
        } catch(e){
            return thunckApi.rejectWithValue(e);
        }
    }
);

export const login = createAsyncThunk(
    'members/login',
    async (member, thunckApi) => {
        try {
            const response = await axios.post('http://localhost:9090/members/login', member);
            return response.data.item;
        } catch(e){
            return thunckApi.rejectWithValue(e);
        }
    }
);