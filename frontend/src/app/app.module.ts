import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { AddNotebookPanelComponent } from './add-notebook-panel/add-notebook-panel.component';
import { NotebooksListComponent } from './notebooks-list/notebooks-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NotebooksListItemComponent } from './notebooks-list-item/notebooks-list-item.component';
import { FormsModule } from '@angular/forms';
import { NotesPanelComponent } from './notes-panel/notes-panel.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesListItemComponent } from './notes-list-item/notes-list-item.component';
import { NoteComponent } from './note/note.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SidePanelComponent,
    AddNotebookPanelComponent,
    NotebooksListComponent,
    NotebooksListItemComponent,
    NotesPanelComponent,
    NotesListComponent,
    NotesListItemComponent,
    NoteComponent,
    AddNoteComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
