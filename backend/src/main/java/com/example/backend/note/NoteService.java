package com.example.backend.note;

import com.example.backend.exceptions.NoteNotFoundException;
import com.example.backend.exceptions.NotebookNotFoundException;
import com.example.backend.notebook.Notebook;
import com.example.backend.notebook.NotebookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteService {
    @Autowired
    private final NoteRepository noteRepository;

    @Autowired
    private final NotebookRepository notebookRepository;

    public NoteService(NoteRepository noteRepository, NotebookRepository notebookRepository) {
        this.noteRepository = noteRepository;
        this.notebookRepository = notebookRepository;
    }

    public Note addNote(Note note) {
        return noteRepository.save(note);
    }

    public void moveNoteToAnotherNotebook(Long oldNotebookId, Long newNotebookId, Long noteId){
        Notebook oldNotebook = notebookRepository.findById(oldNotebookId).orElseThrow(() -> new NotebookNotFoundException(oldNotebookId));
        Notebook newNotebook = notebookRepository.findById(newNotebookId).orElseThrow(() -> new NotebookNotFoundException(newNotebookId));
        Note note = oldNotebook.getNotes().stream().filter(actualNote -> actualNote.getId().equals(noteId)).findFirst().orElseThrow(() -> new NoteNotFoundException(noteId));

        oldNotebook.getNotes().remove(note);
        note.setNotebook(newNotebook);
        newNotebook.getNotes().add(note);

        notebookRepository.save(oldNotebook);
        notebookRepository.save(newNotebook);
        noteRepository.save(note);
    }
}
