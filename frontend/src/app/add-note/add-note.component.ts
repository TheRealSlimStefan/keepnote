import { Component } from '@angular/core';
import { NotebookService } from '../notebook.service';
import { Note } from '../models/Note';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css'],
})
export class AddNoteComponent {
  title: string = '';
  content: string = '';

  constructor(private readonly notebookService: NotebookService) {}

  addNote() {
    this.notebookService.addNote(
      new Note(null, this.title, this.content, null)
    );
    this.title = '';
    this.content = '';
  }
}
