import React from 'react';
import styled from 'styled-components';

// styled-component 생성
// 스타일이 적용된 컴포넌트를 하나의 변수로 생성한다.
const Box1 = styled.div`
    width: 32px;
    height: 32px;
    background: red;
`;

const Box2 = styled.div`
    width: 64px;
    height: 64px;
    background: blue;
`;

const Wrapper = styled.div`
    display: flex;
`

const StyledComponent = () => {
  return (
    <>
        {/** styled component도 하나의 컴포넌트기 때문에
            JSX에서 컴포넌트를 호출하는 것처럼 사용한다. */}
        <Wrapper>
            <Box1/>
            <Box2/>
        </Wrapper>
    </>
  );
};

export default StyledComponent;