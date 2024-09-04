import React from 'react';
/**
 *  부모 컴포넌트로부터 전달된 props 받는 방법 1
 *  props 키워드로 모든 props 받기 
 */
// const PropsOfComponent = (props) => {
//   return (
//     <>
//         <p>{props.num}</p>
//         <button onClick={props.addNum}>+</button>
//         <button onClick={props.subNum}>-</button>
//         <button onClick={() => props.setNum(props.num * 2)}>*2</button>
//         <button onClick={() => props.setNum(props.num / 2)}>/2</button>
//     </>
//   );
// };
/**
 *  부모 컴포넌트로부터 전달된 props 받는 방법 2
 *  비구조화할당으로 변수로 하나씩 할당받기
 *  props : {
 *      num: 0,
 *      addNum: function,
 *      subNum: function,
 *      setNum: function
 *  } 
 *  {num, addNum, subNum, setNum}
 */
const PropsOfComponent = ({num, addNum, subNum, setNum}) => {
    return (
      <>
          <p>{num}</p>
          <button onClick={addNum}>+</button>
          <button onClick={subNum}>-</button>
          <button onClick={() => setNum(num * 2)}>*2</button>
          <button onClick={() => setNum(num / 2)}>/2</button>
      </>
    );
};

export default PropsOfComponent;