const todo = document.getElementById("todo");
const tanggal = document.getElementById("date");
const tambah = document.getElementById("Add");
const todoList = document.getElementById("todoList");
const hapus = document.getElementById("delete");

let todos = [];

function renderTodos() {
  if (todos.length === 0) {
    todoList.innerHTML = `<tr><td colspan="4" class="text-center py-4 text-gray-500">No task found</td></tr>`;
    return;
  }

  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
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

tambah.addEventListener("click", () => {
     event.preventDefault();
  const task = todo.value.trim();
  const date = tanggal.value;
  if (task === "" || date === "") return alert("Isi semua kolom!");
  todos.push({ task, date, done: false });
  todo.value = "";
  tanggal.value = "";
  renderTodos();
});

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

function toggleDone(index) {
  todos[index].done = !todos[index].done;
  renderTodos();
}

hapus.addEventListener("click", () => {
  todos = [];
  renderTodos();
});

renderTodos();
