package com.bit.todo.service.impl;

import com.bit.todo.dto.MemberDto;
import com.bit.todo.entity.Member;
import com.bit.todo.jwt.JwtProvider;
import com.bit.todo.repository.MemberRepository;
import com.bit.todo.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtProvider jwtProvider;

    @Override
    public MemberDto join(MemberDto memberDto) {
        if(memberDto == null || memberDto.getUsername() == null
                || memberDto.getPassword() == null) {
            throw new RuntimeException("invalid argument");
        }

        if(memberRepository.existsByUsername(memberDto.getUsername())) {
            throw new RuntimeException("already exist username");
        }

        memberDto.setPassword(passwordEncoder.encode(memberDto.getPassword()));
        memberDto.setRole("ROLE_USER");

        MemberDto joinMemberDto = memberRepository.save(memberDto.toEntity()).toDto();

        joinMemberDto.setPassword("");

        return joinMemberDto;
    }

    @Override
    public MemberDto login(MemberDto memberDto) {
        Member member = memberRepository.findByUsername(memberDto.getUsername()).orElseThrow(
                () -> new RuntimeException("username not exist")
        );

        if(!passwordEncoder.matches(memberDto.getPassword(), member.getPassword())) {
            throw new RuntimeException("wrong password");
        }

        MemberDto loginMemberDto = member.toDto();

        loginMemberDto.setPassword("");
        loginMemberDto.setToken(jwtProvider.createJwt(member));

        return loginMemberDto;
    }
}
