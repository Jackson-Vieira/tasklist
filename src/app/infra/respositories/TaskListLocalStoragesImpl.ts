// TaskList Local Storage Implementation

import TaskList from "../../usecases/ports/TaskList";
import { TaskObject } from "../../entities";

export default function TaskListLocalStoragesImpl(): TaskList {
  const STORAGE_KEY = "tasks";

  const getStoredTasks = (): TaskObject[] => {
    const tasks = localStorage.getItem(STORAGE_KEY);
    return tasks ? JSON.parse(tasks) : [];
  };

  const saveTasks = (tasks: TaskObject[]): void => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  };

  return {
    addTask: async (task: TaskObject): Promise<void> => {
      const tasks = getStoredTasks();
      tasks.push(task);
      saveTasks(tasks);
    },
    removeTask: async (task_id: string): Promise<void> => {
      const tasks = getStoredTasks();
      const newTasks = tasks.filter((task) => task.text !== task_id);
      saveTasks(newTasks);
    },
    editTask: async (task_id: string, text: string): Promise<void> => {
      const tasks = getStoredTasks();
      const newTasks = tasks.map((task) => {
        if (task.text === task_id) {
          task.text = text;
        }
        return task;
      });
      saveTasks(newTasks);
    },
    markTaskAsDone: async (task_id: string): Promise<void> => {
      const tasks = getStoredTasks();
      const newTasks = tasks.map((task) => {
        if (task.text === task_id) {
          task.done = true;
        }
        return task;
      });
      saveTasks(newTasks);
    },
    markTaskAsUndone: async (task_id: string): Promise<void> => {
      const tasks = getStoredTasks();
      const newTasks = tasks.map((task) => {
        if (task.text === task_id) {
          task.done = false;
        }
        return task;
      });
      saveTasks(newTasks);
    },
    getTasks: async (): Promise<TaskObject[] | []> => {
      const tasks = getStoredTasks();
      return tasks;
    }
  }
}
