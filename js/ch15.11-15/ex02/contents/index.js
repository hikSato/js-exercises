const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");

async function retryWithExponentialBackoff(fn, retries = 3, delay = 500) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (
        i < retries - 1 &&
        error.response?.status >= 500 &&
        error.response?.status < 600
      ) {
        await new Promise((r) => setTimeout(r, delay));
        delay *= 2;
      } else {
        throw error;
      }
    }
  }
}

// タイムアウト処理を追加した fetch リクエスト
async function fetchWithTimeout(url, options, timeout = 3000) {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Request timeout")), timeout)
    ),
  ]);
}

// API からタスクを取得し ToDo リストに表示する
document.addEventListener("DOMContentLoaded", async () => {
  try {
    disableUserInteraction();
    const fetchTasks = () =>
      fetchWithTimeout("http://localhost:3000/api/tasks");
    const response = await retryWithExponentialBackoff(fetchTasks);
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    const result = await response.json();
    result.items.forEach((item) => appendToDoItem(item));
  } catch (error) {
    alert(`Failed to fetch todo list: ${error.message}`);
  } finally {
    enableUserInteraction();
  }
});

// 新しいタスクを追加する
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const todo = input.value.trim();
  if (todo === "") return;
  input.value = "";

  try {
    disableUserInteraction();
    const todoObj = { name: todo };
    const createTask = () =>
      fetchWithTimeout("http://localhost:3000/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todoObj),
      });
    const response = await retryWithExponentialBackoff(createTask);
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    const result = await response.json();
    appendToDoItem(result);
  } catch (error) {
    alert(`Failed to post todo: ${error.message}`);
  } finally {
    enableUserInteraction();
  }
});

// ToDo リストに要素を追加する
function appendToDoItem(task) {
  const elem = document.createElement("li");

  const label = document.createElement("label");
  label.textContent = task.name;
  label.style.textDecorationLine = "none";

  const toggle = document.createElement("input");
  toggle.type = "checkbox";
  toggle.addEventListener("change", async () => {
    try {
      disableUserInteraction();
      const updateTask = { status: toggle.checked ? "completed" : "active" };
      const updateStatus = () =>
        fetchWithTimeout(`/api/tasks/${task.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updateTask),
        });
      const response = await retryWithExponentialBackoff(updateStatus);
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);
      const result = await response.json();
      label.style.textDecorationLine =
        result.status === "completed" ? "line-through" : "none";
    } catch (error) {
      alert(`Failed to update todo: ${error.message}`);
    } finally {
      enableUserInteraction();
    }
  });

  const destroy = document.createElement("button");
  destroy.textContent = "❌";
  destroy.addEventListener("click", async () => {
    try {
      disableUserInteraction();
      const deleteTask = () =>
        fetchWithTimeout(`/api/tasks/${task.id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });
      const response = await retryWithExponentialBackoff(deleteTask);
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);
      elem.remove();
    } catch (error) {
      alert(`Failed to delete todo: ${error.message}`);
    } finally {
      enableUserInteraction();
    }
  });

  elem.appendChild(toggle);
  elem.appendChild(label);
  elem.appendChild(destroy);
  list.prepend(elem);
}

const disableUserInteraction = () => {
  document.body.classList.add("disabled");
};

const enableUserInteraction = () => {
  document.body.classList.remove("disabled");
};
