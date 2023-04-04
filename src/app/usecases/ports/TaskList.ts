import { Task, TaskObject } from "../../entities";

export default interface TaskList {
  addTask(task: TaskObject): Promise<void>;
  removeTask(task_id: string): Promise<void>;
  editTask(task_id: string): Promise<void>;
  markTaskAsDone(task_id: string): Promise<void>;
  markTaskAsUndone(task_id: Task): Promise<void>;
  getTasks(): Promise<TaskObject[]>;
}