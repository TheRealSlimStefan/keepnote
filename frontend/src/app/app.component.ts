import { Component } from '@angular/core';
import { NotebookService } from './notebook.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NotebookService],
})
export class AppComponent {
  title = 'frontend';
}
