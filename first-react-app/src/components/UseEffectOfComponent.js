import React, { useEffect, useState } from 'react';

const UseEffectOfComponent = () => {
    const [num, setNum] = useState(0);
    const [number, setNumber] = useState(0);

    useEffect(() => {
      alert(`초기 렌더링 시에 실행`);
      console.log(num);
      setNum(num + 1);
    }, []);

    // 두 번째 매개변수인 배열에 state 변수를 지정하게 되면
    // state 변수가 변경될 때마다 리렌더링이 일어나게 되고
    // 그 시점에 실행할 코드를 첫 번째 매개변수인
    // 화살표 함수에 지정할 수 있다.
    // useEffect(() => {
    //   alert(`num값이 변경되면 실행: ${num}`);

    //   // state 값이 변경되기 직전에 실행될 동작을 만들고 싶으면 cleanUp 메소드를 리턴한다.
    //   // cleanUp 메소드는 return되는 함수.
    //   return () => {
    //     alert(`num값이 변경되기 직전에 실행: ${num}`);
    //   }
    // }, [num]);

    // 두 번째 매개변수인 배열에 두 개이상의 state 변수가 지정됐을 때
    // 하나의 state 변수의 값이라도 변경이 되면
    // 첫 번째 매개변수의 화살표함수가 실행된다.
    // useEffect가 동작하는 시점이 두 번째 매개변수인 배열에 의존하고 있기 때문에
    // 두 번째 매개변수를 의존성 배열이라고 부른다.
    useEffect(() => {
      console.log(num);
      console.log(number);
    }, [num, number]);

    return (
      <>
        <p>{num}</p>
        <button onClick={() => setNum(num + 1)}>+</button>
        <button onClick={() => setNum(num - 1)}>-</button>
      </>
    );
};

export default UseEffectOfComponent;