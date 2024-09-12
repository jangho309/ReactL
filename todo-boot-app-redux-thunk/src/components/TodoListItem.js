import React, {useCallback} from 'react';
import { MdCheckBoxOutlineBlank, MdRemoveCircleOutline, MdCheckBox } from 'react-icons/md';
import '../scss/TodoListItem.scss';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { changeChecked, removeTodo } from '../apis/todoApis';

const TodoListItem = ({todo}) => {
  const {id, text, checked} = todo;
  const dispatch = useDispatch();

  return (
    <div className='TodoListItem'>
      {/**
       * classnames 라이브러리를 이용해서 조건부 클래스명 적용
       * todo객체의 checked 속성이  true일 경우에 속성명과 동일한 클래스명이 적용된다.
       */}
        <div className={cn('checkbox', {checked})} onClick={() => dispatch(changeChecked(todo))}>
            {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
            <div className='text'>{text}</div>
        </div>
        <div className='remove' onClick={() => dispatch(removeTodo(id))}>
            <MdRemoveCircleOutline/>
        </div>
    </div>
  );
};

export default TodoListItem;