import {createContext} from 'react';

// 1. 전역 상태변수인 context 변수 생성
// 컴포넌트처럼 사용하기 때문에 첫 글자를 대문자로 지정한다.
const StaticColorContext = createContext({color: 'black'});

export default StaticColorContext;