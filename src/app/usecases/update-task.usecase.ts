// update task usecase

import TaskList from "./ports/TaskList";


export default function updateTaskUseCase(taskList: TaskList) {
  return async function execute(task_id: string, text: string) {
    await taskList.editTask(task_id, text);
  }
}
