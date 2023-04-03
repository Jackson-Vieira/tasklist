## Entities

### TaskList - A list of tasks `Array<Task>`** 

```json
[
  {
    "text": "Buy milk",
    "done": false,
    "createdAt": 1234567890,
    "doneAt": 1234567890
  },
  {
    "text": "Buy eggs",
    "done": true,
    "createdAt": 1234567890,
    "doneAt": 1234567890
  },
  {
    "text": "Buy bread",
    "done": false,
    "createdAt": 1234567890,
    "doneAt": 1234567890
  }
]
```

### Logs - A list of logs `Array<Log>`

```json
[
  {
    "text": "Buy milk",
    "createdAt": 1234567890,
    "type": "created"
  },
  {
    "text": "Buy milk",
    "doneAt": 1234567890,
    "type": "done"
  }
]
```
