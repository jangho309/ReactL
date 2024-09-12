import {createSlice} from '@reduxjs/toolkit';

const memberSlice = createSlice({
    name: 'members',
    initialState: {
        id: 0,
        username: '',
    },
    reducers: {
        member_login: (state, action) => ({
            ...state,
            id: action.payload.id,
            username: action.payload.username
        })
    }
});

export const {member_login} = memberSlice.actions;

export default memberSlice.reducer;