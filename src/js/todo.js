let todos = todoData ? todoData : [];

const modalTaskData = `
<form class="todo-preview">
    <div class="control-form">
    <input type="text" name="title" id="title" />
    </div>

    <div class="todo-resume">
    <select name="priority" id="priority">
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
    </select>
    <select name="status" id="status">
        <option value="done">Done</option>
        <option value="process">Process</option>
        <option value="toDo">ToDo</option>
    </select>
    </div>

    <div class="control-form about">
    <label for="desc">About TODO</label>
    <textarea name="desc" id="desc">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, voluptatum!</textarea
    >
    </div>

    <div class="control-form">
    <label>Create At</label>
    <input type="date" name="date" id="date" />
    </div>

    <button class="btn">+</button>
</form>
`;

const btnSwithTheme = document.querySelector(".btn.switch-theme");
const btnToggleModal = document.querySelectorAll(".btn.toggle-modal");
const modalOverlay = document.querySelector(".modal-overlay");
const contentItems = document.querySelector(".content-items");

btnSwithTheme.addEventListener("click", toggleTheme);
btnToggleModal.forEach((el) => el.addEventListener("click", toggleShowModal));

function toggleTheme(e) {
  const isdark = document.querySelector("html").classList.toggle("darkMode");
  isdark
    ? (e.currentTarget.innerHTML = svgLight)
    : (e.currentTarget.innerHTML = svgDark);
}

function toggleShowModal() {
  modalOverlay.classList.toggle("modal-show");
}

function initTodoApp() {
  btnSwithTheme.innerHTML = svgDark;
  btnToggleModal[0].innerHTML = svgAdd;

  contentItems.innerHTML = ``;
  todos.map((todo) => {
    contentItems.innerHTML += `
    <div class="todo-item">
    <div class="title">${todo.title}</div>
    <div class="todo-resume">
      <span class="priority">${todo.priority}</span>
      <span class="staus">${todo.status}</span>
    </div>
    <p class="create-at">${todo.date}</p>
  </div>
    `;
  });
}

function handlecreateTodo(e) {
  e.preventDefault();

  const newData = {
    id: Math.random(),
    title: e.target.title.value,
    priority: e.target.priority.value,
    status: e.target.status.value,
    desc: e.target.desc.value,
    date: e.target.date.value,
  };

  todos = [...todos, newData];

  localStorage.setItem("todoData", JSON.stringify(todos));
  toggleShowModal();
}

initTodoApp();
