let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    document.getElementById("taskCount").innerText = 
    `Total: ${tasks.length} tareas`;


    tasks.forEach((task, index) => {
        list.innerHTML += `
            <li style="text-decoration: ${task.completed ? 'line-through' : 'none'}">
                ${task.text}
                <button onclick="toggleComplete(${index})">✔</button>
                <button onclick="editTask(${index})">Editar</button>
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

function deleteTask(index) {
    if (confirm("¿Seguro que quieres eliminar esta tarea?")) {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
    }
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

function clearTasks() {
    if (confirm("¿Seguro que quieres eliminar todas las tareas?")) {
        tasks = [];
        saveTasks();
        renderTasks();
    }
}



// cargar al iniciar
renderTasks();