import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoSlice from "../slices/todoSlice";
import memberSlice from "../slices/memberSlice";

const ReducerRoot = combineReducers({
    // todoSlice: todoSlice()
    todoSlice,
    memberSlice
});

// todoSlice에서 만든 상태변수를 저장소에서 관리할 수 있게
// 상태변수의 reducer 함수와 store를 연결한다.
const store = configureStore({
    reducer: ReducerRoot,
});

export default store;