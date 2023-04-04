// {
//   "text": "Buy milk",
//   "createdAt": 1234567890,
//   "type": "created"
// },

// Log class

export interface LogObject {
  text: string;
  createdAt: number;
  type: string;
}

export class Log {
  text: string;
  createdAt: number;
  type: string;

  constructor(text: string, type: string) {
    this.text = text;
    this.createdAt = Date.now();
    this.type = type;
  }

  get object(): LogObject {
    return {
      text: this.text,
      createdAt: this.createdAt,
      type: this.type,
    };
  }
}
