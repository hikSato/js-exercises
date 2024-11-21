// 以下の型を定義すること
//  - User: { id: number, name: string }
//  - Task: { title: string, completed: boolean, user: User }
//  - Priority: "low"|"middle"|"high"のいずれかの値をとる
//  - PriorityTask: Taskかつ{ priority: Priority }を持つ型

type User = {
  id: number;
  name: string;
};

type Task = {
  title: string;
  completed: boolean;
  user: User;
};

type Priority = "low" | "middle" | "high";

export type PriorityTask = Task & {
  priority: Priority;
};

function isUserObject(obj) {
  return (
    typeof obj === "object" &&
    typeof obj["id"] === "number" &&
    typeof obj["name"] === "string"
  );
}

export class TaskManager {
  private _tasks: Task[] = [];

  // タスクを追加する
  add(task: Task): void {
    this._tasks.push(task);
  }

  // タスクを完了にする
  completeTask(target: User | string): void {
    if (isUserObject(target)) {
      this._tasks
        .filter((t) => t.user === target)
        .forEach((t) => (t.completed = true));
    } else {
      this._tasks
        .filter((t) => t.title === target)
        .forEach((t) => (t.completed = true));
    }
  }

  // 引数の関数にマッチするタスクを返す
  getTasks(predicate?: (task: Task) => boolean): Task[] {
    if (predicate === undefined) {
      return this._tasks;
    } else {
      return this._tasks.filter(predicate);
    }
  }
}

// priority="low"または完了済のタスクを判定する
export function isLowOrCompletedTask(task: PriorityTask): boolean {
  return task.priority === "low" || task.completed;
}

// 判定関数の否定結果を返す関数を生成する
export function not<T>(f: (arg: T) => boolean): (arg: T) => boolean {
  return (arg) => !f(arg);
}
