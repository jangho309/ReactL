import React, { useState } from 'react';

const EventOfComponent = () => {
    const [msg, setMsg] = useState('');

    const changeMsg = (e) => {
        console.log(e.target.value);
        setMsg(e.target.value);
    }

    const reset = () => {
        setMsg('');
    }

  return (
    <>
        {/**
         * 이벤트를 매핑할 때는 화살표 함수를 이용하여 
         * 함수형태로 바로 매핑할 수도 있고
         * 외부에 선언되어 있는 메소드를 메소드 명으로 매핑해도 된다.
         */}
        <input type='text'
               name='msg'
               value={msg}
               onChange={(e) => {
                                    setMsg(e.target.value); 
                                    console.log(e.target.value);
                                }
                }></input>
        <input type='text'
               name='msg'
               value={msg}
               onChange={changeMsg}></input>
        {/**매개변수가 있는 메소드를 호출할 때는 무조건 화살표 함수 형태로 전달한다. */}
        <button onClick={() => setMsg('')}>초기화</button>
    </>
  );
};

export default EventOfComponent;