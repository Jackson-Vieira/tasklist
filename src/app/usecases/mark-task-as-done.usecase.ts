// make task as done 
import TaskList from "./ports/TaskList";

export default function markTaskAsDoneUseCase(taskList: TaskList) {
  return async function execute(task_id: string) {
    await taskList.markTaskAsDone(task_id);
  }
}
