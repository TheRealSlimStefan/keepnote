package com.example.backend.exceptions;

public class NoteNotFoundException extends RuntimeException {
    public NoteNotFoundException(Long noteId){
        super("Note with id " + noteId + " does not exist!");
    }
}
