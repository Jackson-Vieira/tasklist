import { TaskObject } from "../../entities";

export default interface TaskList {
  /**
   * Add a new task to the task list.
   * @param {Task} task - The task to add.
   * @returns {Task} - The task added.
  */
  addTask(task: TaskObject): Promise<TaskObject>;

  /**
 * Remove a task from the task list by its text.
 * @param {string} task_id - The text of the task to remove.
 */
  removeTask(task_id: string): Promise<void>;

  /**
   * Edit a task from the task list by its text.
   * @param {string} task_id - The text of the task to edit.
   * @param {string} text - The new text of the task.
  */
  editTask(task_id: string, text: string): Promise<void>;

  /**
   * Mark a task as done from the task list by its text.
   * @param {string} task_id - The text of the task to mark as done.
  */
  markTaskAsDone(task_id: string): Promise<void>;

  /**
   * Mark a task as undone from the task list by its text.
   * @param {string} task_id - The text of the task to mark as undone.
  */
  markTaskAsUndone(task_id: string): Promise<void>;

  /**
   * Get all tasks from the task list.
    * @returns {Task[]} - The list of tasks.
    * @returns {[]} - If there are no tasks.
  */
  getTasks(): Promise<TaskObject[] | []>;
}