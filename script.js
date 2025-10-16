const todo = document.getElementById("todo");
const tanggal = document.getElementById("date");
const tambah = document.getElementById("Add");
const todoList = document.getElementById("todoList");
const hapus = document.getElementById("delete");
const filter = document.getElementById("Filter");

let todos = [];

function renderTodos(list = todos) {
  if (list.length === 0) {
    todoList.innerHTML = `<tr><td colspan="4" class="text-center py-4 text-gray-500">No task found</td></tr>`;
    return;
  }

  todoList.innerHTML = "";
  list.forEach((todo, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="py-2">${todo.task}</td>
      <td>${todo.date}</td>
      <td>${todo.done ? "Done" : "Pending"}</td>
      <td>
        <button onclick="toggleDone(${index})" class="text-green-400 hover:underline">Done</button>
        <button onclick="deleteTodo(${index})" class="text-red-400 hover:underline ml-2">Del</button>
      </td>
    `;
    todoList.appendChild(row);
  });
}

// tambah task
tambah.addEventListener("click", (event) => {
  event.preventDefault();
  const task = todo.value.trim();
  const date = tanggal.value;
  if (task === "" || date === "") return alert("Isi semua kolom!");
  todos.push({ task, date, done: false });
  todo.value = "";
  tanggal.value = "";
  renderTodos();
});

// filter by date
filter.addEventListener('click', () => {
  const sortedTodos = [...todos].sort((a, b) => new Date(a.date) - new Date(b.date));
  renderTodos(sortedTodos);
});

// delete task
function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

// toggle status
function toggleDone(index) {
  todos[index].done = !todos[index].done;
  renderTodos();
}

// delete all
hapus.addEventListener("click", () => {
  todos = [];
  renderTodos();
});

// render awal
renderTodos();
