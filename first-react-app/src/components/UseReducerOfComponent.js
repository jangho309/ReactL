import React, { useReducer } from 'react';

// state => num, action => {type: 'INCREASE'}
function reducerNum(state, action){
    // action 객체의 상태에 따라 state 변수의 값을 업데이트한다.
    // return 되는 값이 현재 state 변수의 값으로 업데이트된다.
    switch(action.type){
        case 'Increase':
            console.log(`action의 type이 Increase일 때 실행: ${state}`);
            return {value1: state.value1 + 1, value2: state.value2 + 2};
        case 'Decrease':
            console.log(`action의 type이 Decrease일 때 실행: ${state}`);
            return {value1: state.value1 - 1, value2: state.value2 - 2};
        default:
            return state;
    }
}

const UseReducerOfComponent = () => {
    // useReducer로 상태 변수를 만들어주는 데
    // 첫 번째 매개변수로 reducer 함수를 지정해서 
    // dispatch 메소드로 action을 발생시킬 때마다
    // 지정된 reducer 함수가 실행된다.
    // dispatch 메소드는 호출할 때 매개변수로 action을 넣어준다.
    const [num, dispatch] = useReducer(reducerNum, {value1: 0, value2: 0});

    return (
        <>
            <p>{num.value1}</p>
            <p>{num.value2}</p>
            {/** dispatch 메소드의 매개변수로 전달된 action을 발생시켜 reducer 함수를 호출 */}
            <button onClick={() => dispatch({type: 'Increase'})}>+</button>
            <button onClick={() => dispatch({type: 'Decrease'})}>-</button>
        </>
    );
};

export default UseReducerOfComponent;