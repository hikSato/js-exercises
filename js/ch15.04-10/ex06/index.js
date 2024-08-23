const template = document.createElement("template");
template.innerHTML = `\
<link rel="stylesheet" href="/ch15.04-10/ex06/style.css" />
<style>
.completed {
  text-decoration: line-through;
}
</style>

<form id="new-todo-form">
  <input type="text" id="new-todo" placeholder="What needs to be done?" />
  <button>Add</button>
</form>
<ul id="todo-list"></ul>
`;

class TodoApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.form = this.shadowRoot.querySelector("#new-todo-form");
    // TODO: 残りを実装
    this.input = this.shadowRoot.querySelector("#new-todo");
    this.todoList = this.shadowRoot.querySelector("#todo-list");

    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.addTodo();
    });
  }

  addTodo() {
    const todoText = this.input.value.trim();
    if (todoText === "") return;

    const todoItem = document.createElement("li");
    todoItem.innerHTML = `
    <div class="view">
      <input class="toggle" type="checkbox" />
      <label class="content">${todoText}</label>
      <button class="destroy">❌</button>
    </div>
  `;

    // 完了済みのタスクをマークするための処理
    todoItem.querySelector(".toggle").addEventListener("change", (event) => {
      if (event.target.checked) {
        todoItem.querySelector("label").classList.add("completed");
      } else {
        todoItem.querySelector("label").classList.remove("completed");
      }
    });

    // タスクを削除するための処理
    todoItem.querySelector(".destroy").addEventListener("click", () => {
      this.todoList.removeChild(todoItem);
    });

    this.todoList.appendChild(todoItem);
    this.input.value = "";
  }
}

customElements.define("todo-app", TodoApp);
