// mark task as undone usecase

import TaskList from "./ports/TaskList";

export default function markTaskAsUndoneUseCase(taskList: TaskList) {
  return async function execute(task_id: string) {
    await taskList.markTaskAsUndone(task_id);
  }
}
