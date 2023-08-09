package com.example.backend.exceptions;

public class NotebookNotFoundException extends RuntimeException {
    public NotebookNotFoundException(Long notebookId){
        super("Notebook with id " + notebookId + " does not exist!");
    }
}
