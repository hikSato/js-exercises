const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");
let arr = [];

document.addEventListener("DOMContentLoaded", async () => {
  // TODO: ここで localStorage を呼び出してタスク一覧を取得し、
  // 成功したら取得したタスクを appendToDoItem で ToDo リストの要素として追加しなさい
  const result = getTodoList();
  if (result.length !== 0) {
    result.forEach((item) => appendToDoItem(item));
  }
});

window.addEventListener("storage", (e) => {
  if (e.key === "list") {
    location.reload();
  }
});

form.addEventListener("submit", async (e) => {
  // TODO: ここで form のイベントのキャンセルを実施しなさい (なぜでしょう？)
  e.preventDefault();

  // 両端からホワイトスペースを取り除いた文字列を取得する
  const todo = input.value.trim();
  if (todo === "") {
    return;
  }

  // new-todo の中身は空にする
  input.value = "";

  // TODO: ここで API を呼び出して新しいタスクを作成し
  // 成功したら作成したタスクを appendToDoElement で ToDo リストの要素として追加しなさい
  const todoObj = {
    id: getRandomString(),
    name: todo,
    status: "active",
  };
  // localStorageに保存
  const todos = getTodoList();
  todos.push(todoObj);
  setTodoList(todos);
  appendToDoItem(todoObj);
});

// localStorageから取得したタスクオブジェクトを受け取って、ToDo リストの要素を追加する
function appendToDoItem(task) {
  // ここから #todo-list に追加する要素を構築する
  const elem = document.createElement("li");

  const label = document.createElement("label");
  label.textContent = task.name;
  label.style.textDecorationLine = "none";
  const toggle = document.createElement("input");
  // TODO: toggle が変化 (change) した際に API を呼び出してタスクの状態を更新し
  // 成功したら label.style.textDecorationLine を変更しなさい
  toggle.type = "checkbox";
  toggle.addEventListener("change", () => {
    const todos = getTodoList();
    const index = todos.findIndex((e) => task.id === e.id);
    if (index !== -1) {
      todos[index].status = toggle.checked ? "completed" : "active";
      setTodoList(todos);
      label.style.textDecorationLine = toggle.checked ? "line-through" : "none";
    }
  });

  const destroy = document.createElement("button");
  destroy.textContent = "❌";
  // TODO: destroy がクリック (click) された場合に API を呼び出してタスク を削除し
  // 成功したら elem を削除しなさい
  destroy.addEventListener("click", () => {
    let todos = getTodoList();
    todos = todos.filter((e) => e.id !== task.id);
    setTodoList(todos);
    elem.remove();
  });

  // TODO: elem 内に toggle, label, destroy を追加しなさい
  label.style.textDecorationLine =
    task.status === "completed" ? "line-through" : "none";
  toggle.checked = task.status === "completed";
  elem.appendChild(toggle);
  elem.appendChild(label);
  elem.appendChild(destroy);
  list.prepend(elem);
}

const setTodoList = (todoList) => {
  try {
    arr = todoList;
    window.localStorage.setItem("list", JSON.stringify(todoList));
  } catch {
    console.log("storage error.");
  }
};

const getTodoList = () => {
  try {
    return JSON.parse(window.localStorage.getItem("list") || "[]");
  } catch {
    console.log("storage error.");
    return arr;
  }
};

const getRandomString = (length = 16) => {
  const candidates = "0123456789";
  return Array.from(
    { length },
    () => candidates[Math.floor(Math.random() * candidates.length)]
  ).join("");
};
