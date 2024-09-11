package com.bit.todo.service;

import com.bit.todo.dto.MemberDto;

public interface MemberService {
    MemberDto join(MemberDto memberDto);

    MemberDto login(MemberDto memberDto);
}
