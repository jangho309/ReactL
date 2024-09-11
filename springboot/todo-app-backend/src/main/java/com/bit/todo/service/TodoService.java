package com.bit.todo.service;

import com.bit.todo.dto.TodoDto;
import com.bit.todo.entity.Member;

import java.util.List;

public interface TodoService {
    List<TodoDto> post(TodoDto todoDto, Member member);

    List<TodoDto> findAll(Member member);

    List<TodoDto> deleteById(Long id, Member member);

    List<TodoDto> modify(TodoDto todoDto, Member member);
}
