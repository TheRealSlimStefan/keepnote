package com.example.backend.note;

import com.example.backend.notebook.Notebook;
import com.example.backend.notebook.NotebookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NoteController {
    private final NoteService noteService;

    @Autowired
    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @PutMapping("/note/{noteId}/from/{oldNotebookId}/to/{newNotebookId}")
    public ResponseEntity<Notebook> moveNoteToAnotherNotebook(@PathVariable("oldNotebookId") Long oldNotebookId, @PathVariable("newNotebookId") Long newNotebookId, @PathVariable("noteId") Long noteId) {
        noteService.moveNoteToAnotherNotebook(oldNotebookId, newNotebookId, noteId);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
