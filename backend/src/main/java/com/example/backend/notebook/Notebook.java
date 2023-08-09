package com.example.backend.notebook;

import com.example.backend.note.Note;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@Setter
@Getter
@Entity
@Table(name="notebooks")
public class Notebook {
    @Id
    @SequenceGenerator(
            name = "notebook_sequence",
            sequenceName = "notebook_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "notebook_sequence"
    )
    @Column(name="notebook_id", nullable = false)
    private Long id;

    @Column(name="notebook_name", nullable = false)
    private String name;

    @OneToMany(mappedBy="notebook", cascade = CascadeType.ALL, orphanRemoval = true)
    private final List<Note> notes;

    public Notebook() {
        notes = new ArrayList<>();
    }
}
