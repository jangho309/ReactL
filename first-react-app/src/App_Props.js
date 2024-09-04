
import { useState } from 'react';
import './App.css';
import PropsOfComponent from './components/PropsOfComponent';

function App() {
  const [num, setNum] = useState(0);

  const addNum = () => {
    setNum(num + 1);
  }

  const subNum = () => {
    setNum(num - 1);
  }

  return (
    <div>
      {/* 부모의 state 변수나 메소드를 props로 자식 컴포넌트에 전달할 수 있다.
          전달하는 방법은 태그에 속성을 추가하는 것처럼 전달한다.
        */}
      <PropsOfComponent num={num} addNum={addNum} subNum={subNum}
                        setNum={setNum}/>
    </div>
  );
}

export default App;
