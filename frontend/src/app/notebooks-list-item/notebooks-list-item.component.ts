import { Component, Input } from '@angular/core';
import { Notebook } from '../models/Notebook';
import { NotebookService } from '../notebook.service';

@Component({
  selector: 'app-notebooks-list-item',
  templateUrl: './notebooks-list-item.component.html',
  styleUrls: ['./notebooks-list-item.component.css'],
})
export class NotebooksListItemComponent {
  @Input() notebook!: Notebook;
  name = '';
  editOn = false;

  constructor(private readonly notebookService: NotebookService) {}

  setCurrentNotebook() {
    this.notebookService.setCurrentNotebook(this.notebook);
    this.name = this.notebook.name;
  }

  edit(event: Event) {
    event.stopPropagation();

    if (this.editOn) {
      this.notebookService.editNotebook(this.name);
    }

    this.editOn = !this.editOn;
  }

  delete(event: Event) {
    event.stopPropagation();
    this.notebookService.deleteNotebook(this.notebook.id);
  }
}
