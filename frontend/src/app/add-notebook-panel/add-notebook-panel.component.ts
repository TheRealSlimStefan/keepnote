import { Component, OnInit } from '@angular/core';
import { Notebook } from '../models/Notebook';
import { NotebookService } from '../notebook.service';

@Component({
  selector: 'app-add-notebook-panel',
  templateUrl: './add-notebook-panel.component.html',
  styleUrls: ['./add-notebook-panel.component.css'],
})
export class AddNotebookPanelComponent {
  title: string = '';

  constructor(private readonly notebookService: NotebookService) {}

  addNotebook() {
    this.notebookService.addNotebook(new Notebook(null, this.title, null));
    this.notebookService.getNotebooks();
    this.title = '';
  }
}
