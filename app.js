develop

 HEAD
let tasks = [];

qa
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

 develop

develop
qa
function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        list.innerHTML += `
            <li style="text-decoration: ${task.completed ? 'line-through' : 'none'}">
                ${task.text}
                <button onclick="toggleComplete(${index})">✔</button>
 develop
                <button onclick="editTask(${index})">Editar</button>

 HEAD

                <button onclick="editTask(${index})">Editar</button>
 develop
qa
                <button onclick="deleteTask(${index})">Eliminar</button>
            </li>
        `;
    });
}

function addTask() {
    const input = document.getElementById("taskInput");

    if (input.value.trim() === "") return;

    tasks.push({
        text: input.value,
        completed: false
    });

    input.value = "";
    saveTasks();
    renderTasks();
}
develop

 HEAD
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
 qa

function deleteTask(index) {
    if (confirm("¿Seguro que quieres eliminar esta tarea?")) {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
    }
 develop

 develop
 qa
}

function editTask(index) {
    const newTask = prompt("Editar tarea:", tasks[index].text);

    if (newTask !== null && newTask.trim() !== "") {
        tasks[index].text = newTask;
        saveTasks();
        renderTasks();
    }
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

// cargar al iniciar
renderTasks();