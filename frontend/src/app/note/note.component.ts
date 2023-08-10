import { Component } from '@angular/core';
import { Note } from '../models/Note';
import { NotebookService } from '../notebook.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent {
  note!: Note;
  isEditOn: boolean = false;
  title = '';
  content = '';

  constructor(private readonly notebookService: NotebookService) {}

  ngOnInit() {
    this.notebookService.choosenNote$.subscribe((note) => {
      this.note = note;
      this.title = this.note.name;
      this.content = this.note.content;
    });
  }

  editNote() {
    this.notebookService.editNote(
      new Note(null, this.title, this.content, null)
    );
    this.isEditOn = false;
  }

  startEditing() {
    this.isEditOn = true;
  }
}
