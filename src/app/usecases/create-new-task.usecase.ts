// create new task usecase
import TaskList from "./ports/TaskList";
import { Task } from "../entities";

export default function createNewTaskUseCase(taskList: TaskList) {
  return async function execute(text: string) {
    const task = new Task(text);
    await taskList.addTask(task.object);
  }
}