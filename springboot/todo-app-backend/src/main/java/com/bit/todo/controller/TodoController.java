package com.bit.todo.controller;

import com.bit.todo.dto.ResponseDto;
import com.bit.todo.dto.TodoDto;
import com.bit.todo.entity.CustomUserDetails;
import com.bit.todo.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/todos")
public class TodoController {
    private final TodoService todoService;

    @PostMapping
    public ResponseEntity<?> post(@RequestBody TodoDto todoDto,
                                  @AuthenticationPrincipal CustomUserDetails customUserDetails) {
        ResponseDto<TodoDto> responseDto = new ResponseDto<>();

        try {
            List<TodoDto> todoDtoList = todoService.post(todoDto, customUserDetails.getMember());

            responseDto.setItems(todoDtoList);
            responseDto.setStatusCode(HttpStatus.CREATED.value());
            responseDto.setStatusMessage("created");

            return ResponseEntity.ok(responseDto);
        } catch(Exception e) {
            responseDto.setStatusCode(HttpStatus.INTERNAL_SERVER_ERROR.value());
            responseDto.setStatusMessage(e.getMessage());
            return ResponseEntity.internalServerError().body(responseDto);
        }
    }

    @GetMapping
    public ResponseEntity<?> getTodos(@AuthenticationPrincipal CustomUserDetails customUserDetails) {
        ResponseDto<TodoDto> responseDto = new ResponseDto<>();

        try {
            List<TodoDto> todoDtoList = todoService.findAll(customUserDetails.getMember());

            responseDto.setItems(todoDtoList);
            responseDto.setStatusCode(HttpStatus.OK.value());
            responseDto.setStatusMessage("ok");

            return ResponseEntity.ok(responseDto);
        } catch(Exception e) {
            responseDto.setStatusCode(HttpStatus.INTERNAL_SERVER_ERROR.value());
            responseDto.setStatusMessage(e.getMessage());
            return ResponseEntity.internalServerError().body(responseDto);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> removeTodo(@PathVariable("id") Long id,
                                        @AuthenticationPrincipal CustomUserDetails customUserDetails) {
        ResponseDto<TodoDto> responseDto = new ResponseDto<>();

        try {
            List<TodoDto> todoDtoList = todoService.deleteById(id, customUserDetails.getMember());

            responseDto.setItems(todoDtoList);
            responseDto.setStatusCode(HttpStatus.NO_CONTENT.value());
            responseDto.setStatusMessage("no content");

            return ResponseEntity.ok(responseDto);
        } catch(Exception e) {
            responseDto.setStatusCode(HttpStatus.INTERNAL_SERVER_ERROR.value());
            responseDto.setStatusMessage(e.getMessage());
            return ResponseEntity.internalServerError().body(responseDto);
        }
    }

    @PatchMapping
    public ResponseEntity<?> modifyTodo(@RequestBody TodoDto todoDto,
                                        @AuthenticationPrincipal CustomUserDetails customUserDetails) {
        ResponseDto<TodoDto> responseDto = new ResponseDto<>();

        try {
            List<TodoDto> todoDtoList = todoService.modify(todoDto, customUserDetails.getMember());

            responseDto.setItems(todoDtoList);
            responseDto.setStatusCode(HttpStatus.OK.value());
            responseDto.setStatusMessage("ok");

            return ResponseEntity.ok(responseDto);
        } catch(Exception e) {
            responseDto.setStatusCode(HttpStatus.INTERNAL_SERVER_ERROR.value());
            responseDto.setStatusMessage(e.getMessage());
            return ResponseEntity.internalServerError().body(responseDto);
        }
    }


}
