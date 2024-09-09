import {useState} from 'react';
import Parent from './components/Parent';
import Child from './components/Child';
import FunctionalChildren from './components/FunctionalChildren';

function App() {
  const [data, setData] = useState([1, 2, 3, 4, 5]);

  return (
    <>
      <Parent>
        {/** 컴포넌트 하위의 컴포넌트나 태그들을 props의 children 속성으로
         *    꺼내서 사용할 수 있다.
         */}
         <Child num={10}></Child>
         <div>
          <h1>children</h1>
          <p>children은 하위 컴포넌트나 하위 태그들을 모두 불러올 수 있는 props의 속성이다.</p>
         </div>
      </Parent>
      <FunctionalChildren>
        {/**함수도 children으로 보낼 수 있다. RenderProps라고 부른다. */}
        {value => value * 2}
      </FunctionalChildren>
    </>
  );
}

export default App;
