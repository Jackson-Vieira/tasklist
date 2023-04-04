// TaskList Local Storage Implementation

import TaskList from "../../usecases/ports/TaskList";
import { TaskObject } from "../../entities";

export default function TaskListLocalStoragesImpl(): TaskList {
  const FIELD_NAME = "tasks";

  const getTasks = async (): Promise<TaskObject[]> => {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      return JSON.parse(tasks);
    }
    return [];
  }

  return {
    addTask: async (task: TaskObject): Promise<void> => {
      const tasks = await getTasks();
      tasks.push(task);
      localStorage.setItem(FIELD_NAME, JSON.stringify(tasks));
    },
    removeTask: async (task_id: string): Promise<void> => {
      const tasks = await getTasks();
      const newTasks = tasks.filter((task) => task.text !== task_id);
      localStorage.setItem(FIELD_NAME, JSON.stringify(newTasks));
    },
    editTask: async (task_id: string, text: string): Promise<void> => {
      const tasks = await getTasks();
      const newTasks = tasks.map((task) => {
        if (task.text === task_id) {
          task.text = text;
        }
        return task;
      });
      localStorage.setItem(FIELD_NAME, JSON.stringify(newTasks));
    },
    markTaskAsDone: async (task_id: string): Promise<void> => {
      const tasks = await getTasks();
      const newTasks = tasks.map((task) => {
        if (task.text === task_id) {
          task.done = true;
        }
        return task;
      });
      localStorage.setItem(FIELD_NAME, JSON.stringify(newTasks));
    },
    markTaskAsUndone: async (task_id: string): Promise<void> => {
      const tasks = await getTasks();
      const newTasks = tasks.map((task) => {
        if (task.text === task_id) {
          task.done = false;
        }
        return task;
      });
      localStorage.setItem(FIELD_NAME, JSON.stringify(newTasks));
    },
    getTasks
  }
}
