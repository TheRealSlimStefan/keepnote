import { Component, Input } from '@angular/core';
import { Note } from '../models/Note';
import { NotebookService } from '../notebook.service';

@Component({
  selector: 'app-notes-list-item',
  templateUrl: './notes-list-item.component.html',
  styleUrls: ['./notes-list-item.component.css'],
})
export class NotesListItemComponent {
  @Input() note!: Note;

  constructor(private readonly notebookService: NotebookService) {}

  setCurrentNote() {
    this.notebookService.setCurrentNote(this.note);
  }

  makeShorter(text: string) {
    return text.length > 125 ? text.substring(0, 125) + '...' : text;
  }

  delete(event: Event) {
    event.stopPropagation();
    this.notebookService.deleteNote(this.note.id);
  }
}
