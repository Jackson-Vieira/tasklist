// list tasks usecase

import TaskList from "./ports/TaskList";

export default function listTasksUseCase(taskList: TaskList) {
  return async function execute() {
    return await taskList.getTasks();
  }
}