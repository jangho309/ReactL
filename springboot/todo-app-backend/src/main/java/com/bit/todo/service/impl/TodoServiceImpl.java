package com.bit.todo.service.impl;

import com.bit.todo.dto.TodoDto;
import com.bit.todo.entity.Member;
import com.bit.todo.entity.Todo;
import com.bit.todo.repository.TodoRepository;
import com.bit.todo.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TodoServiceImpl implements TodoService {
    private final TodoRepository todoRepository;

    @Override
    public List<TodoDto> post(TodoDto todoDto, Member member) {
        todoRepository.save(todoDto.toEntity(member));
        return todoRepository.findByMemberUsername(member.getUsername()).stream().map(Todo::toDto).toList();
    }

    @Override
    public List<TodoDto> findAll(Member member) {
        return todoRepository.findByMemberUsername(member.getUsername()).stream().map(Todo::toDto).toList();
    }

    @Override
    public List<TodoDto> deleteById(Long id, Member member) {
        todoRepository.deleteById(id);
//        todoRepository.deleteByIdAndMemberUsername(id, member);
        return todoRepository.findByMemberUsername(member.getUsername()).stream().map(Todo::toDto).toList();
    }

    @Override
    public List<TodoDto> modify(TodoDto todoDto, Member member) {
        todoDto.setChecked(!todoDto.isChecked());

        todoRepository.save(todoDto.toEntity(member));
        return todoRepository.findByMemberUsername(member.getUsername()).stream().map(Todo::toDto).toList();
    }


}
