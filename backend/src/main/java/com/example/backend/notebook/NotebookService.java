package com.example.backend.notebook;

import com.example.backend.exceptions.NoteNotFoundException;
import com.example.backend.exceptions.NotebookNotFoundException;
import com.example.backend.note.Note;
import com.example.backend.note.NoteRepository;
import com.example.backend.note.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotebookService {
    @Autowired
    private final NotebookRepository notebookRepository;
    @Autowired
    private final NoteService noteService;

    public NotebookService(NotebookRepository notebookRepository, NoteService noteService) {
        this.notebookRepository = notebookRepository;
        this.noteService = noteService;
    }

    public List<Notebook> getNotebooks() { return notebookRepository.findAll();}

    public Notebook addNotebook(Notebook notebook) {
        return notebookRepository.save(notebook);
    }

    public Notebook getNotebook(Long notebookId) {
        return notebookRepository.findById(notebookId).orElseThrow(() -> new NotebookNotFoundException(notebookId));
    }

    public void deleteNotebook(Long notebookId){
        Notebook notebookToDelete = notebookRepository.findById(notebookId).orElseThrow(() -> new NotebookNotFoundException(notebookId));
        notebookRepository.delete(notebookToDelete);
    }

    public Notebook editNotebook(Long notebookId, Notebook newNotebook){
        Notebook notebook = notebookRepository.findById(notebookId).orElseThrow(() -> new NotebookNotFoundException(notebookId));

        if(newNotebook.getName() != null) notebook.setName(newNotebook.getName());

        return notebookRepository.save(notebook);
    }

    public Notebook addNoteToNotebook(Long notebookId, Note newNote){
        Notebook notebook = notebookRepository.findById(notebookId).orElseThrow(() -> new NotebookNotFoundException(notebookId));

        Note note = new Note(notebook, newNote.getName(), newNote.getContent());
        noteService.addNote(note);
        
        return notebook;
    }

    public Notebook deleteNoteFromNotebook(Long notebookId, Long noteId){
        Notebook notebook = notebookRepository.findById(notebookId).orElseThrow(() -> new NotebookNotFoundException(notebookId));
        Note noteToRemove = notebook.getNotes().stream().filter(note -> note.getId().equals(noteId)).findFirst().orElseThrow(() -> new NoteNotFoundException(noteId));

        if(noteToRemove != null){
            notebook.getNotes().remove(noteToRemove);
            noteToRemove.setNotebook(null);
            notebookRepository.save(notebook);
        }

        return notebook;
    }

    public Notebook editNoteInNotebook(Long notebookId, Long noteId, Note newNote){
        Notebook notebook = notebookRepository.findById(notebookId).orElseThrow(() -> new NotebookNotFoundException(notebookId));
        Note noteToEdit = notebook.getNotes().stream().filter(note -> note.getId().equals(noteId)).findFirst().orElseThrow(() -> new NoteNotFoundException(noteId));

        if(noteToEdit != null){
            noteToEdit.setName(newNote.getName());
            noteToEdit.setContent(newNote.getContent());

            notebookRepository.save(notebook);
        }

        return notebook;
    }
}
