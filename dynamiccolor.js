import {createContext, useState} from 'react';

const DynamicColorContext = createContext({
    state: {
        color: 'black',
        subcolor: 'red'
    },
    actions: {
        setColor: () => {},
        setSubcolor: () => {}
    }
});

// DynamicColorContext의 Provider를 렌더링하는 컴포넌트
const DynamicColorContextProvider = ({children}) => {
    const [color, setColor] = useState('black');
    const [subcolor, setSubcolor] = useState('red');

    const initialContext = {
        // ES6의 축약된 표현식
        // 변수명이랑 같은 키가 자동으로 생성된다.
        state: {
            color,
            subcolor
        },
        actions: {
            setColor,
            setSubcolor
        }
    };

    // DynamicColorContextProvider가 최초 렌더링될 때 
    // DynamicColorContext의 상태변수 값이 Provider에 지정된 value에 의해
    // DynamicColorContextProvider의 state변수로 초기화 되고
    // actions는 DynamicColorContextProvider의 state의 setter 메소드로 지정된다.
    // DynamicColorContext의 actions의 메소드를 호출하게 되면 
    // DynamicColorContextProvider의 setter 메소드가 호출되게 되고
    // DynamicColorContextProvider의 state 값이 변경되면서
    // DynamicColorContextProvider가 리렌더링 되면서
    // initialContext의 값이 변경되게 되고 
    // 변경된 값을 DynamicColorContext의 Provider에 제공하면서
    // DynamicColorContext의 상태변수 값이 변경되게 되고
    // Consumer 이용해서 DynamicColorContext의 상태변수를 이용하고 있던 
    // 컴포넌트들에게 상태변수가 변경된 것을 알려주게 된다.
    return (
        <DynamicColorContext.Provider value={initialContext}>
            {children}
        </DynamicColorContext.Provider>
    )
}

const DynamicColorContextConsumer = DynamicColorContext.Consumer;

export {DynamicColorContextProvider, DynamicColorContextConsumer};

export default DynamicColorContext;