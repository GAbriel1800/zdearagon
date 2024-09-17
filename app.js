document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Datos de inicio de sesión correctos
    const correctUsername = 'GabrielRey';  // Cambia esto por el nombre de usuario correcto
    const correctPassword = 'miPassword123';  // Cambia esto por la contraseña correcta
    
    // Verificar si coinciden
    if (username === correctUsername && password === correctPassword) {
        // Si los datos son correctos, redirigir a tareas.html
        window.location.href = "tareas.html";
    } else {
        // Si los datos son incorrectos, mostrar un mensaje de error
        alert('Usuario o contraseña incorrectos. Inténtalo de nuevo.');
    }
});
