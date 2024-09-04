import React, {useState} from 'react';

const StateOfComponent = () => {
    // state 변수 생성
    // 변수와 setter 메소드를 쌍으로 선언한다.
    // state 변수는 setter 메소드로만 값을 변경해야된다.
    // useState 메소드는 state 변수를 만들어주는 메소드로 
    // 매개변수는 state 변수의 초기값
    const [num, setNum] = useState(0);

    // state 변수가 아닌 변수는 값이 변경되고 리렌더링되지 않는다.
    let number = 0;

    const addNum = () => {
        // setter 메소드를 통한 state 변수 값 변경
        setNum(num + 1);
    }

    const subNum = () => {
        setNum(num - 1);
    }

    const addNumber = () => {
        number++;
        console.log(number);
    }

    const subNumber = () => {
        number--;
        console.log(number);
    }
  return (
    <>
        <p>{num}</p>
        <p>{number}</p>
        {/*매개변수가 없는 메소드를 매핑할 때는 메소드명으로 매핑 */}
        <button onClick={addNum}>+</button>
        <button onClick={subNum}>-</button>
        {/*매개변수가 있는 메소드를 매핑할 때는 함수형으로 매핑 */}
        <button onClick={() => setNum(num * 2)}>*2</button>
        <button onClick={() => setNum(num / 2)}>/2</button>
        <button onClick={addNumber}>number+</button>
        <button onClick={subNumber}>number-</button>
    </>
  );
};

export default StateOfComponent;