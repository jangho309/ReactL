import './App.css';
import {useState} from 'react';

function App() {
  const [isActive, setIsActive] = useState(false);

  const arr = [1, 2, 3, 4, 5];

  const changeIsActive = () => {
    alert(isActive); 
    setIsActive(!isActive);
  }

  return (
    <>
      {/**1. 컴포넌트나 태그를 여러개를 사용할 때는 최상위 부모 태그로 감싸줘야한다.
       * <>,</>나 <Fragment></Fragment>나 <div></div>로 묶어준다.
       * 주로 <>, </> 사용한다.
       */}
      {/** 2. JavaScript 문법(변수, 메소드, 표현식)을 사용할 때는 중괄호({})블록으로 묶어서 사용한다.
       *    if문은 조건문으로 사용할 수 없고 삼항연산자를 사용해야 한다.
      */}
      {arr && arr.map(num => <p>{num}</p>)}
      {/** 3. 이벤트나 태그의 속성값들은 카멜케이스로 지정한다. */}
      {isActive ? 
        <p onClick={changeIsActive} style={{color: 'green', backgroundColor: 'gray'}}>true</p> : 
        <p onClick={changeIsActive} style={{color: 'red', backgroundColor: 'yellow'}}>false</p>}
      {/** 4. html의 class 속성은 className으로 지정한다. */}
      <div className='App'>
        <p>JSX</p>
      </div>
      {/** 5. JSX에서는 닫는 태그를 생략하면 에러가 발생한다. 
       *      html에서 닫는 태그 없는 태그들도 JSX에서는 닫는 태그로 닫아줘야된다.
       */}
       <input type="text" value={arr[0]}></input>

    </>
  );
}

export default App;
