import { Component, OnInit } from '@angular/core';
import { NotebookService } from '../notebook.service';
import { Notebook } from '../models/Notebook';

@Component({
  selector: 'app-notebooks-list',
  templateUrl: './notebooks-list.component.html',
  styleUrls: ['./notebooks-list.component.css'],
})
export class NotebooksListComponent implements OnInit {
  notebooks: Notebook[] = [];

  constructor(private readonly notebookService: NotebookService) {}

  ngOnInit() {
    this.notebookService.notebooks$.subscribe((notebooks) => {
      this.notebooks = notebooks;
    });
  }
}
