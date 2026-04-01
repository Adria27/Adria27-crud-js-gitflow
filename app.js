let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        list.innerHTML += `
            <li>
                ${task}
                <button onclick="editTask(${index})">Editar</button>
                <button onclick="deleteTask(${index})">Eliminar</button>
            </li>
        `;
    });
}

// CREATE
function addTask() {
    const input = document.getElementById("taskInput");
    if (input.value === "") return;

    tasks.push(input.value);
    input.value = "";
    saveTasks();
    renderTasks();
}

// DELETE
function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

// UPDATE
function editTask(index) {
    const newTask = prompt("Editar tarea:", tasks[index]);
    if (newTask) {
        tasks[index] = newTask;
        saveTasks();
        renderTasks();
    }
}

// READ
renderTasks();