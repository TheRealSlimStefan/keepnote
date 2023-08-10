# keepnote

## User Stories

As a user,
So that I can retrieve information about a specific notebook,
I want to be able to get details of a notebook by its ID.

As a user,
So that I can view a list of all available notebooks,
I want to be able to retrieve a list of all notebooks.

As a user,
So that I can add a new notebook,
I want to be able to create a new notebook.

As a user,
So that I can remove a notebook,
I want to be able to delete a notebook by its ID.

As a user,
So that I can edit a notebook's information,
I want to be able to update the details of a notebook by its ID.

As a user,
So that I can add a note to a specific notebook,
I want to be able to add a new note to a notebook by its ID.

As a user,
So that I can remove a note from a notebook,
I want to be able to delete a note from a notebook by the notebook's ID and the note's ID.

As a user,
So that I can edit a note within a notebook,
I want to be able to update a note's details within a notebook by the notebook's ID and the note's ID.

## Domain Model

| Classes         | Methods                                                      | Scenario                               | Outputs |
|-----------------|--------------------------------------------------------------|----------------------------------------|---------|
| `NotebookController` | `getNotebook(Long notebookId)`                                | Get notebook by ID                     | `Notebook` object |
|                   | `getNotebooks()`                                             | Get list of all notebooks              | List of `Notebook` objects |
|                   | `addNotebook(Notebook notebook)`                            | Add a new notebook                      | `Notebook` object |
|                   | `deleteNotebook(Long notebookId)`                            | Delete a notebook by ID                 | Response status |
|                   | `editNotebook(Long notebookId, Notebook newNotebook)`       | Edit a notebook by ID                   | `Notebook` object |
|                   | `addNoteToNotebook(Long notebookId, Note newNote)`          | Add a note to a notebook by ID          | `Notebook` object |
|                   | `deleteNoteFromNotebook(Long notebookId, Long noteId)`      | Delete a note from a notebook by IDs    | `Notebook` object |
|                   | `editNoteInNotebook(Long notebookId, Long noteId, Note note)` | Edit a note in a notebook by IDs        | `Notebook` object |

## Database Scheme

![image](https://github.com/TheRealSlimStefan/keepnote/assets/66061781/dfae8962-f74d-4039-b658-65832eac7ac6)
