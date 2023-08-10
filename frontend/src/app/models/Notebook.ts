import { Note } from './Note';

export class Notebook {
  id: number;
  name: string;
  notes: Note[];

  constructor(id: number | null, name: string | null, notes: Note[] | null) {
    if (id !== null) this.id = id;
    else this.id = 0;

    if (name !== null) this.name = name;
    else this.name = '';

    if (notes !== null) this.notes = notes;
    else this.notes = [];
  }
}
