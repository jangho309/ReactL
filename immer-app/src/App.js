import React, {useRef, useState, useCallback} from 'react';

function App() {
    // useRef는 유일한 값을 만들어주기 때문에 객체의 id로도 활용할 수 있다.
    const nextId = useRef(1);

    const [form, setForm] = useState({username: '', password: ''});
    const [data, setData] = useState({array: [], uValue: null});

    // input의 값이 변경될 때 동작할 메소드
    const inputValueChange = useCallback((e) => {
      // 비구조화할당을 이용하여 e.target.name은 name이라는 변수에
      // e.target.value는 value라는 변수에 할당
      const {name, value} = e.target;

      // console.log(name);
      // console.log(value);

      // 불변성 유지
      setForm({
        ...form,
        [name]: value
      });
    }, [form]);

    // 등록버튼을 눌렀을 때 동작할 메소드
    const handleSubmit = useCallback((e) => {
      e.preventDefault();

      // data.array 배열에 추가될 데이터 객체 생성
      const info = {
        id: nextId.current,
        username: form.username,
        password: form.password
      };

      // data.array 배열에 위에서 만든 데이터 객체 추가. 불변성 유지
      setData({
        ...data,
        array: data.array.concat(info)
      });

      // 사용자 등록후에는 input 초기화
      setForm({
        username: '',
        password: ''
      });

      // ref 값 증가
      nextId.current += 1;
    }, [data, form]);

    const deleteUserInfo = useCallback((id) => {
      // data에 있는 사용자 객체 삭제
      setData({
        ...data,
        // filter: 조건식에서 true가 리턴되는 값들만 모아서 새로운 배열로 만든다.
        array: data.array.filter(info => {
          console.log(info.id);
          return info.id !== id
        })
      });
    }, [data]);
    return (
      <form onSubmit={handleSubmit}>
        <input name='username'
               placeholder='id'
               type='text'
               value={form.username}
               onChange={inputValueChange}></input>
        <input name='password'
               placeholder='password'
               type='password'
               value={form.password}
               onChange={inputValueChange}></input>
        <button type='submit'>등록</button>
        <ul>
          {data && data.array.map(info =>
            <li key={info.id} onClick={() => deleteUserInfo(info.id)}
                style={{cursor: 'pointer'}}>
              username: {info.username}, password: {info.password}
            </li>
          )}
        </ul>
      </form>
    );
}

export default App;
