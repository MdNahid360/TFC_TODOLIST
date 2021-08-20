const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
let todoList = document.querySelector(".todo-list");

todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", addRemove);

function addTodo(event) {
  event.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  let newTodo = document.createElement("li");
  let tsx = document.createElement("div");
  tsx.innerText = todoInput.value;
  newTodo.classList.add("todo-items");
  todoDiv.appendChild(newTodo);
  newTodo.appendChild(tsx);

  // complete buttons
  let completebtn = document.createElement("button");

  completebtn.classList.add("complete-btn");
  completebtn.classList.add("btn");

  // hide buttons
  let cls = document.createElement("button");

  cls.classList.add("cls-btn");
  cls.classList.add("btn");

  // delete buttons
  let deletebtn = document.createElement("button");
  deletebtn.innerHTML = `<i class="ri-delete-bin-6-line"></i>`;
  deletebtn.classList.add("delete-btn");
  deletebtn.classList.add("btn");

  // add appendChild
  todoList.appendChild(todoDiv);
  newTodo.appendChild(completebtn);
  newTodo.appendChild(deletebtn);
  newTodo.appendChild(cls);

  // clear todos
  todoInput.value = "";
}

function addRemove(e) {
  const dtodo = e.target;
  if (dtodo.classList[0] === "delete-btn") {
    const sTodo = dtodo.parentElement;
    sTodo.classList.toggle("rmv");
  }
  if (dtodo.classList[0] === "complete-btn") {
    const b = dtodo.parentElement;
    b.classList.toggle("nn");
  }
  if (dtodo.classList[0] === "cls-btn") {
    const b = dtodo.parentElement;
    b.remove();
  }
}

// dark & light mode theem

let icon = document.getElementById("theem");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "../img/sun-line.png";
  } else {
    icon.src = "../img/moon-line.png";
  }
};
