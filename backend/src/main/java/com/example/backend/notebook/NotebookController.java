package com.example.backend.notebook;

import com.example.backend.note.Note;
import org.aspectj.weaver.ast.Not;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class NotebookController {
    private final NotebookService notebookService;

    @Autowired
    public NotebookController(NotebookService notebookService) {
        this.notebookService = notebookService;
    }

    @GetMapping("/notebook/{notebookId}")
    public ResponseEntity<Notebook> getNotebook(@PathVariable("notebookId") Long notebookId) {
        Notebook notebook = notebookService.getNotebook(notebookId);
        return new ResponseEntity<>(notebook, HttpStatus.OK);
    }

    @GetMapping("/notebooks")
    public ResponseEntity<List<Notebook>> getNotebooks(){
        List<Notebook> listOfNotebooks = notebookService.getNotebooks();
        return new ResponseEntity<>(listOfNotebooks, HttpStatus.OK);
    }

    @PostMapping("/notebook")
    public ResponseEntity<Notebook> addNotebook(@RequestBody Notebook notebook){
        Notebook responseNotebook = notebookService.addNotebook(notebook);
        return new ResponseEntity<>(responseNotebook, HttpStatus.OK);
    }

    @DeleteMapping("/notebook/{notebookId}")
    public ResponseEntity<Notebook> deleteNotebook(@PathVariable("notebookId") Long notebookId) {
        notebookService.deleteNotebook(notebookId);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @PutMapping("/notebook/{notebookId}")
    public ResponseEntity<Notebook> editNotebook(@PathVariable("notebookId") Long notebookId, @RequestBody Notebook newNotebook) {
        Notebook editedNotebook = notebookService.editNotebook(notebookId, newNotebook);
        return new ResponseEntity<>(editedNotebook, HttpStatus.OK);
    }

    @PostMapping("/notebook/{notebookId}/note")
    public ResponseEntity<Notebook> addNoteToNotebook(@PathVariable("notebookId") Long notebookId, @RequestBody Note newNote) {
        Notebook editedNotebook = notebookService.addNoteToNotebook(notebookId, newNote);
        return new ResponseEntity<>(editedNotebook, HttpStatus.OK);
    }

    @DeleteMapping("/notebook/{notebookId}/note/{noteId}")
    public ResponseEntity<Notebook> deleteNoteFromNotebook(@PathVariable("notebookId") Long notebookId, @PathVariable("noteId") Long noteId) {
        Notebook editedNotebook = notebookService.deleteNoteFromNotebook(notebookId, noteId);
        return new ResponseEntity<>(editedNotebook, HttpStatus.OK);
    }

    @PutMapping("/notebook/{notebookId}/note/{noteId}")
    public ResponseEntity<Notebook> editNoteToNotebook(@PathVariable("notebookId") Long notebookId, @PathVariable("noteId") Long noteId, @RequestBody Note note) {
        Notebook editedNotebook = notebookService.editNoteInNotebook(notebookId, noteId, note);
        return new ResponseEntity<>(editedNotebook, HttpStatus.OK);
    }
}
