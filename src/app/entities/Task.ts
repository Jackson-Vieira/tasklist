// {
//   "text": "Buy milk",
//   "done": false,
//   "createdAt": 1234567890,
//   "doneAt": 1234567890
// }

export class Task {
  text: string;
  done: boolean;
  createdAt: number;
  doneAt: Date | null;

  constructor(text: string) {
    this.text = text;
    this.done = false;
    this.createdAt = Date.now();
    this.doneAt = null;
  }
  
  markAsDone() {
    this.done = true;
    this.doneAt = new Date();
  }

  markAsUndone() {
    this.done = false;
    this.doneAt = null;
  }

  get object() {
    return {
      text: this.text,
      done: this.done,
      createdAt: this.createdAt,
      doneAt: this.doneAt,
    };
  }
}
