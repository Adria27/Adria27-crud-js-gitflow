let tasks = [];
function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        list.innerHTML += `
            <li style="text-decoration: ${task.completed ? 'line-through' : 'none'}">
                ${task.text}
                <button onclick="toggleComplete(${index})">✔</button>
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
    renderTasks();
}
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function editTask(index) {
    const newTask = prompt("Editar tarea:", tasks[index]);
    if (newTask !== null && newTask.trim() !== "") {
        tasks[index] = newTask;
        renderTasks();
    }
}

<button onclick="editTask(${index})">Editar</button>