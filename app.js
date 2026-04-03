let tasks = [];

function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        list.innerHTML += `
            <li>
                ${task}
                <button onclick="deleteTask(${index})">Eliminar</button>
            </li>
        `;
    });
}

function addTask() {
    const input = document.getElementById("taskInput");
    if (input.value === "") return;

    tasks.push(input.value);
    input.value = "";
    renderTasks();
}

function deleteTask(index) {
    if (confirm("¿Seguro que quieres eliminar esta tarea?")) {
        tasks.splice(index, 1);
        renderTasks();
    }
}

function editTask(index) {
    const newTask = prompt("Editar tarea:", tasks[index]);
    if (newTask !== null && newTask.trim() !== "") {
        tasks[index] = newTask;
        renderTasks();
    }
}

<button onclick="editTask(${index})">Editar</button>