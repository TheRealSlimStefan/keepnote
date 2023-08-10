export class Note {
  id: number;
  name: string;
  content: string;
  date: Date;

  constructor(
    id: number | null,
    name: string | null,
    content: string | null,
    date: Date | null
  ) {
    if (id !== null) this.id = id;
    else this.id = 0;

    if (name !== null) this.name = name;
    else this.name = '';

    if (content !== null) this.content = content;
    else this.content = '';

    if (date !== null) this.date = date;
    else this.date = new Date();
  }
}
