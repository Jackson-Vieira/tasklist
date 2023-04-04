// remove task usecase

import TaskList from "./ports/TaskList";

export default function removeTaskUseCase(taskList: TaskList) {
  return async function execute(task_id: string) {
    await taskList.removeTask(task_id);
  }
}
