import React, { useRef, useState } from 'react';

const UseRefOfComponent = () => {
    const [list, setList] = useState([1, 2, 3, 4, 5]);

    // 유일한 ref값을 만들어주는 hook
    const idRef = useRef();
    const pwRef = useRef();
    // useRef는 유일한 값을 만들어주기 때문에 key 속성에도 사용가능하다.
    const listRef = useRef(0);

    const fnClick = () => {
        // 선택자 없이도 useRef 변수를 이용해서 DOM 객체에 접근가능
        if(idRef.current.value === ''){
            alert('아이디를 입력하세요.');
            return;
        }

        if(pwRef.current.value === ''){
            alert('비밀번호를 입력하세요.');
            return;
        }
    }

    return (
        <>
            <label>아이디
                <input type='text' ref={idRef}></input>
            </label>
            <label>비밀번호
                <input type='password' ref={pwRef}></input>
            </label>
            <button onClick={fnClick}>클릭</button>
            <ul>
                {list && list.map(ele => <li key={listRef.current++}>{ele}</li>)}
            </ul>
        </>
    );
};

export default UseRefOfComponent;