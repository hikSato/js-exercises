const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");
const origin = "http://localhost:3001";

document.addEventListener("DOMContentLoaded", async () => {
  // TODO: ここで API を呼び出してタスク一覧を取得し、
  // 成功したら取得したタスクを appendToDoItem で ToDo リストの要素として追加しなさい
  try {
    const response = await fetch(`${origin}/api/tasks`, {
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      credentials: "include",
    });
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    const result = await response.json();
    console.log(result.items);
    result.items.forEach((item) => appendToDoItem(item));
  } catch (error) {
    alert(`Failed to fetch todo list: ${error.message}`);
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
  try {
    const todoObj = {
      name: todo,
    };
    const response = await fetch(`${origin}/api/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      credentials: "include",
      body: JSON.stringify(todoObj),
    });
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    const result = await response.json();
    appendToDoItem(result);
  } catch (error) {
    alert(`Failed to post todo: ${error.message}`);
  }
});

// API から取得したタスクオブジェクトを受け取って、ToDo リストの要素を追加する
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
  toggle.addEventListener("change", async (e) => {
    try {
      const updateTask = {
        status: toggle.checked ? "completed" : "active",
      };
      const response = await fetch(`${origin}/api/tasks/${task.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        credentials: "include",
        body: JSON.stringify(updateTask),
      });
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);
      const result = await response.json();
      label.style.textDecorationLine =
        result.status === "completed" ? "line-through" : "none";
    } catch (error) {
      alert(`Failed to patch todo: ${error.message}`);
    }
  });

  const destroy = document.createElement("button");
  destroy.textContent = "❌";
  // TODO: destroy がクリック (click) された場合に API を呼び出してタスク を削除し
  // 成功したら elem を削除しなさい
  destroy.addEventListener("click", async () => {
    try {
      const response = await fetch(`${origin}/api/tasks/${task.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        credentials: "include",
      });
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);
      elem.remove();
    } catch (error) {
      alert(`Failed to delete todo: ${error.message}`);
    }
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
