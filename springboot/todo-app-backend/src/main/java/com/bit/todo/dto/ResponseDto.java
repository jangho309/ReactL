package com.bit.todo.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ResponseDto<T> {
    private T item;
    private List<T> items;
    private int statusCode;
    private String statusMessage;
}
