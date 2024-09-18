const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");

let db;

const openDb = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("todoDatabase", 1);

    request.onupgradeneeded = (event) => {
      db = event.target.result;
      if (!db.objectStoreNames.contains("todos")) {
        db.createObjectStore("todos", { keyPath: "id" });
      }
    };

    request.onsuccess = (event) => {
      db = event.target.result;
      console.log("Database opened successfully");
      resolve();
    };

    request.onerror = (event) => {
      console.error("Database error:", event.target.error);
      reject(event.target.error);
    };
  });
};

const addTodo = async (todo) => {
  if (!checkDb()) return;

  const transaction = db.transaction(["todos"], "readwrite");
  const store = transaction.objectStore("todos");
  const request = store.add(todo);

  request.onsuccess = () => console.log("Todo added successfully");
  request.onerror = (event) =>
    console.error("Request error:", event.target.error);
};

const getTodos = async (callback) => {
  if (!checkDb()) return;

  const transaction = db.transaction(["todos"]);
  const store = transaction.objectStore("todos");
  const request = store.getAll();

  request.onsuccess = (event) => callback(event.target.result);
  request.onerror = (event) => {
    console.error("Request error:", event.target.error);
    callback([]);
  };
};

const updateTodo = async (todo) => {
  if (!checkDb()) return;

  const transaction = db.transaction(["todos"], "readwrite");
  const store = transaction.objectStore("todos");
  const request = store.put(todo);

  request.onsuccess = () => console.log("Todo updated successfully");
  request.onerror = (event) =>
    console.error("Request error:", event.target.error);
};

const deleteTodo = async (id) => {
  if (!checkDb()) return;

  const transaction = db.transaction(["todos"], "readwrite");
  const store = transaction.objectStore("todos");
  const request = store.delete(id);

  request.onsuccess = () => console.log("Todo deleted successfully");
  request.onerror = (event) =>
    console.error("Request error:", event.target.error);
};

const checkDb = () => {
  if (!db) {
    console.error("Database is not initialized");
    return false;
  }
  return true;
};

document.addEventListener("DOMContentLoaded", async () => {
  try {
    await openDb();
    getTodos((todos) => {
      todos.forEach((item) => appendToDoItem(item));
    });
  } catch (error) {
    console.error("Failed to open database:", error);
  }
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const todo = input.value.trim();
  if (todo === "") {
    return;
  }

  input.value = "";

  const todoObj = {
    id: getRandomString(),
    name: todo,
    status: "active",
  };

  await addTodo(todoObj);
  appendToDoItem(todoObj);
});

const appendToDoItem = (task) => {
  const elem = document.createElement("li");
  const label = document.createElement("label");
  const toggle = document.createElement("input");
  const destroy = document.createElement("button");

  label.textContent = task.name;
  label.style.textDecorationLine =
    task.status === "completed" ? "line-through" : "none";

  toggle.type = "checkbox";
  toggle.checked = task.status === "completed";
  toggle.addEventListener("change", () => {
    task.status = toggle.checked ? "completed" : "active";
    updateTodo(task);
    label.style.textDecorationLine = toggle.checked ? "line-through" : "none";
  });

  destroy.textContent = "❌";
  destroy.addEventListener("click", () => {
    deleteTodo(task.id);
    elem.remove();
  });

  elem.appendChild(toggle);
  elem.appendChild(label);
  elem.appendChild(destroy);
  list.prepend(elem);
};

const getRandomString = (length = 16) => {
  const candidates = "0123456789";
  return Array.from(
    { length },
    () => candidates[Math.floor(Math.random() * candidates.length)]
  ).join("");
};
