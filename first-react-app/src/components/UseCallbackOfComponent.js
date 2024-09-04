import React, { useCallback, useMemo, useState } from 'react'

const getAvg = (numList) => {
    if(numList.length === 0)
        return 0;

    const sum = numList.reduce((acc, val) => acc + val, 0);

    return sum / numList.length;
}

const UseCallbackOfComponent = () => {
    const [list, setList] = useState([]);
    const [num, setNum] = useState(0);

    // 렌더링 될 때마다 생성되는 메소드
    // const changeNum = (e) => {
    //      setNum(e.target.value);
    // }


    // 초기 렌더링 시에만 메소드 생성
    // useCallback은 불필요한 메소드의 생서을 방지하여
    // 메모리 낭비를 최소화하고 컴포넌트의 성능을 향상시킨다.
    const changeNum = useCallback((e) => {
        setNum(e.target.value);
    })

    // list, num의 값이 변경되면 메소드 생성
    // state를 생성할 때도 초기화 값으로 한 번 변경되기 때문에
    // 초기 렌더링 시에도 메소드를 생성한다.(useEffect도 동일)
    const addList = useCallback(() => {
        // 불변성
        // 불변성은 원본데이터를 훼손하지 않는 것을 의미
        // list.concat(num);
        // list = {1, 2, 3};
        // ...list = 1, 2, 3;
        // [...list] = [1, 2, 3];
        const newList = [...list];
        setList(newList.concat(parseInt(num)));
        setNum(0);
    }, [num, list]);

    // useMemo를 통한 연산 최적화
    const avg = useMemo(() => getAvg(list), [list]);
    return (
        <>
            <input type='text'
                   value={num}
                   onChange={changeNum}></input>
            <button onClick={addList}>추가</button>
            <ul>
                {/** 배열에 있는 값으로 DOM을 구성해서 표출하고 싶을 때 map함수를 주로 사용한다. */}
                {/** 배열이 비어있을 때 잘못된 값이 표출되거나 에러가 발생하는 것을 방지하기 위해
                 *   단축평가를 사용한다.
                 */}
                {list && list.map((v, i, arr) => (
                    <li key={i}>{v}</li>
                ))}
            </ul>
            <p>평균: {avg}</p>
        </>
    );
};

export default UseCallbackOfComponent;