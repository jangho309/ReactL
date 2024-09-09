import React from 'react';
import styled, {css} from 'styled-components';

const categories = [
    {
        name: 'all',
        text: '전체보기'
    },
    {
        name: 'business',
        text: '비즈니스'
    },
    {
        name: 'entertainment',
        text: '엔터테인먼트'
    },
    {
        name: 'health',
        text: '건강'
    },
    {
        name: 'science',
        text: '과학'
    },
    {
        name: 'sports',
        text: '스포츠'
    },
    {
        name: 'technology',
        text: '기술'
    }
]

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px){
        width: 100%,
        overflow-x: auto;
    }
`;

// styled-component도 컴포넌트로 사용되기 때문에 props를 받아올수 있다고
// props의 값에 따라 조건부 스타일링을 할 수 있는데
// styled-components 라이브러리의 css 메소드를 이용한다.
const Category = styled.div`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;

    &:hover {
        color: #495057;
    }

    & + & {
        margin-left: 1rem;
    }

    ${
        props =>
            props.active && css`
                font-weight: 600;
                border-bottom: 2px solid #22b8cf;
                color: #22b8cf;
                &:hover {
                    color: #3bc9bd;
                }
            `
    }
`;

const Categories = ({category, changeCategory}) => {
  return (
    <CategoriesBlock>
        {categories && categories.map(
            cate => <Category key={cate.name} 
                              active={category === cate.name}
                              onClick={() => changeCategory(cate.name)}>{cate.text}</Category>
        )}
    </CategoriesBlock>
  );
};

export default Categories;