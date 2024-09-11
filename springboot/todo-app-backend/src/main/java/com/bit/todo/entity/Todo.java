package com.bit.todo.entity;

import com.bit.todo.dto.TodoDto;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@SequenceGenerator(
        name = "todoSeqGenerator",
        sequenceName = "TODO_SEQ",
        initialValue = 1,
        allocationSize = 1
)
public class Todo {
    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "todoSeqGenerator"
    )
    private Long id;
    private String text;
    private boolean checked;

    @ManyToOne
    @JoinColumn(name="member_id")
    private Member member;

    public TodoDto toDto() {
        return TodoDto.builder()
                    .id(this.id)
                    .text(this.text)
                    .checked(this.checked)
                    .member_id(this.member.getId())
                    .build();
    }
}
