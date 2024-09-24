import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoSlice from "../slices/todoSlice";
import memberSlice from "../slices/memberSlice";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

const ReducerRoot = combineReducers({
    // todoSlice: todoSlice()
    todoSlice,
    memberSlice
});

const persistConfig = {
    key: 'root',
    storage: storageSession
}

// sessionStorage를 사용하는 reducer 생성(persistReducer)
// 새로고침시에도 state가 유지될 수 하기 위함.
const persistreducer = persistReducer(persistConfig, ReducerRoot);

// todoSlice에서 만든 상태변수를 저장소에서 관리할 수 있게
// 상태변수의 reducer 함수와 store를 연결한다.
const store = configureStore({
    reducer: persistreducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
    
});

export default store;