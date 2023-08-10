import { Component } from '@angular/core';
import { Note } from '../models/Note';
import { NotebookService } from '../notebook.service';
import { Notebook } from '../models/Notebook';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
})
export class NotesListComponent {
  id!: number;
  notes: Note[] = [];

  constructor(private readonly notebookService: NotebookService) {}

  ngOnInit() {
    this.notebookService.choosenNotebook$.subscribe((notebook) => {
      this.notes = notebook.notes;
    });
  }
}
