## Usecases

*USECASE*: `create` a new task item
- success: 
  1. validate the task item (empty, length, limit (check if the daily tasks limit has been reached))
  2. add the task item to the list of tasks
  3. add a log of the task item `created`
- fail:
  1. throw an error (if the task item is invalid or the limit has been reached) 

*USECASE*: `remove` a task item
- success:
  1. validate the task item (check if exist)
  2. remove the task item from the list of tasks
  3. update task limit per day
  4. add a log of the task item `removed`
- fail:
  1. throw an error (if the task item not exist)
  
*USECASE*: `edit` a task item text
- success:
  1. validate the task item (check if exist)
  2. check if the task item already exist or is empty
  3. edit the task item
  4. add a log of the task item `edited`
- fail:
  1. throw an error (if the task item not exist, already exist, or is empty)
   
*USECASE*: `mark` a task as `done`
- success:
  1. validate the task item (check if exist)
  2. mark the task as done
  3. sort the list of tasks by done status
  4. add a log of the task item `done`
- fail:
  1. throw an error (if the task item not exist)
   
*USECASE*: `mark` a task as `not done`
- success:
  1. validate the task item (check if exist)
  2. mark the task as not done
  3. sort the list of tasks by done status
  4. add a log of the task item `undone`
- fail:
  1. throw an error (if the task item not exist)

*USECASE*: `list all` tasks
- success:
  1. list all tasks by order of creation or by done status or return a empty list if not exist tasks
  2. add a log of the task item `list`
- fail:
  1. return a empty list if not exist tasks

*USECASE*: list all tasks order by a field (creation date, done status, etc)
IDEIA: Use a design pattern to create algorithms to sort the list of tasks by a field
STRATEGY PATTERN: https://refactoring.guru/design-patterns/strategy

- sucess:
  1. list all tasks order by a field or return a empty list if not exist tasks
  2. add a log of the task item `list`
- fail:
  1. throw an error (if the field not exist) or return a empty list if not exist tasks