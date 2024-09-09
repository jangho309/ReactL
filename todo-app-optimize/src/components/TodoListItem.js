import React from 'react';
import { MdCheckBoxOutlineBlank, MdRemoveCircleOutline, MdCheckBox } from 'react-icons/md';
import '../scss/TodoListItem.scss';
import cn from 'classnames'

const TodoListItem = ({todo, removeTodo, changeChecked}) => {
  const {id, text, checked} = todo;

  return (
    <div className='TodoListItem'>
      {/**
       * classnames 라이브러리를 이용해서 조건부 클래스명 적용
       * todo객체의 checked 속성이 true일 경우에 속성명과 동일한 클래스명이 적용한다.
       */}
        <div className={cn('checkbox', {checked})} onClick={() => changeChecked(id)}>
            {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
            <div className='text'>{text}</div>
        </div>
        <div className='remove' onClick={() => removeTodo(id)}>
            <MdRemoveCircleOutline/>
        </div>
    </div>
  );
};

// 최적화 1: React.memo 사용. 변화가 없는 컴포넌트는 리렌더링되지 않도록 방지
export default TodoListItem;