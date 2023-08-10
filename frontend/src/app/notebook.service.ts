import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notebook } from './models/Notebook';
import { environment } from 'src/environments/environment';
import { firstValueFrom, BehaviorSubject } from 'rxjs';
import { Note } from './models/Note';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NotebookService {
  private choosenNoteSubject = new BehaviorSubject<Note>(
    new Note(null, null, null, null)
  );
  choosenNote$ = this.choosenNoteSubject.asObservable();

  private notebooksSubject = new BehaviorSubject<Notebook[]>([]);
  notebooks$ = this.notebooksSubject.asObservable();
  private choosenNotebookSubject = new BehaviorSubject<Notebook>(
    new Notebook(null, null, null)
  );

  choosenNotebook$ = this.choosenNotebookSubject.asObservable();
  constructor(private readonly http: HttpClient, private router: Router) {
    this.getNotebooks().subscribe((notebooks) => {
      this.notebooksSubject.next(notebooks);
    });
  }

  getNotebooks() {
    return this.http.get<Notebook[]>(
      environment.apiUrl + environment.notebooks_endpoint
    );
  }

  getNotebook(id: number) {
    return this.http.get<Notebook>(
      environment.apiUrl + environment.add_notebook_endpoint + '/' + id
    );
  }

  addNotebook(notebook: Notebook) {
    this.http
      .post(environment.apiUrl + environment.add_notebook_endpoint, notebook)
      .subscribe((response) => {
        this.getNotebooks().subscribe((notebooks) => {
          this.notebooksSubject.next(notebooks);
        });
      });
  }

  setCurrentNotebook(notebook: Notebook) {
    this.choosenNotebookSubject.next(notebook);
  }

  setCurrentNote(note: Note) {
    this.choosenNoteSubject.next(note);
  }

  addNote(note: Note) {
    console.log(note);

    this.http
      .post(
        environment.apiUrl +
          environment.add_notebook_endpoint +
          '/' +
          this.choosenNotebookSubject.getValue().id +
          '/' +
          environment.add_note_endpoint,
        note
      )
      .subscribe((response) => {
        this.getNotebook(this.choosenNotebookSubject.getValue().id).subscribe(
          (notebook) => {
            this.choosenNotebookSubject.next(notebook);
          }
        );

        this.getNotebooks().subscribe((notebooks) => {
          this.notebooksSubject.next(notebooks);
        });
      });
  }

  deleteNotebook(id: number) {
    this.http
      .delete(environment.apiUrl + environment.add_notebook_endpoint + '/' + id)
      .subscribe((response) => {
        if (id == this.choosenNotebookSubject.getValue().id)
          this.choosenNotebookSubject.next(new Notebook(null, null, null));
        this.getNotebooks().subscribe((notebooks) => {
          this.notebooksSubject.next(notebooks);
        });
        this.router.navigate(['/']);
      });
  }

  deleteNote(id: number) {
    this.http
      .delete(
        environment.apiUrl +
          environment.add_notebook_endpoint +
          '/' +
          this.choosenNotebookSubject.getValue().id +
          '/' +
          environment.add_note_endpoint +
          '/' +
          id
      )
      .subscribe((response) => {
        this.getNotebook(this.choosenNotebookSubject.getValue().id).subscribe(
          (notebook) => {
            this.choosenNotebookSubject.next(notebook);
          }
        );
        this.getNotebooks().subscribe((notebooks) => {
          this.notebooksSubject.next(notebooks);
        });
      });
  }

  editNote(note: Note) {
    this.http
      .put(
        environment.apiUrl +
          environment.add_notebook_endpoint +
          '/' +
          this.choosenNotebookSubject.getValue().id +
          '/' +
          environment.add_note_endpoint +
          '/' +
          this.choosenNoteSubject.getValue().id,
        note
      )
      .subscribe((response) => {
        if (note.id == this.choosenNoteSubject.getValue().id)
          this.choosenNoteSubject.next(new Note(null, null, null, null));
        this.getNotebook(this.choosenNotebookSubject.getValue().id).subscribe(
          (notebook) => {
            this.choosenNotebookSubject.next(notebook);
          }
        );

        this.getNotebooks().subscribe((notebooks) => {
          this.notebooksSubject.next(notebooks);
        });
      });
  }

  editNotebook(name: string) {
    const editedNote = (this.choosenNotebookSubject.getValue().name = name);

    this.http.put(
      environment.apiUrl +
        environment.add_notebook_endpoint +
        '/' +
        this.choosenNotebookSubject.getValue().id +
        '/' +
        environment.add_note_endpoint +
        '/' +
        this.choosenNoteSubject.getValue().id,
      editedNote
    );
  }
}
