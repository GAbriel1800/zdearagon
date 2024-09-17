const users = [
    { username: 'GabrielRey', password: 'miPassword123', name: 'Gabriel', role: 'admin' },
    { username: 'Pablo', password: 'pabloPassword', name: 'Pablo', role: 'worker' },
    { username: 'Martin', password: 'martinPassword', name: 'Martin', role: 'worker' }
];

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        sessionStorage.setItem('user', JSON.stringify(user));
        window.location.href = "tareas.html";
    } else {
        alert('Usuario o contraseña incorrectos. Inténtalo de nuevo.');
    }
});

window.onload = function() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (!user) {
        window.location.href = "index.html";
        return;
    }
    
    document.getElementById('welcome-message').innerText = `Bienvenido, ${user.name}`;
    
    const addTaskBtn = document.getElementById('add-task-btn');
    const newTaskInput = document.getElementById('new-task');
    
    if (user.role === 'worker') {
        newTaskInput.style.display = 'none';
        addTaskBtn.style.display = 'none';
    }

    // Lógica de tareas (agregar/eliminar)
    addTaskBtn.addEventListener('click', function() {
        const taskList = document.getElementById('task-list');
        const newTaskText = newTaskInput.value;

        if (newTaskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `${newTaskText} <button onclick="deleteTask(this)">Eliminar</button>`;
            taskList.appendChild(li);
            newTaskInput.value = '';
        }
    });
}

function deleteTask(button) {
    const li = button.parentNode;
    li.remove();
}

function logout() {
    sessionStorage.removeItem('user');
    window.location.href = "index.html";
}
