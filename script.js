const $registerForm = document.querySelector('.sign-up-form');
const $loginForm = document.querySelector('.sign-in-form');

// Función para guardar los datos del registro en localStorage
function saveRegistrationData(username, password) {
    // Obtener los datos almacenados en localStorage (si existen)
    let usersData = JSON.parse(localStorage.getItem('usersData')) || [];

    // Verificar si el nombre de usuario ya está registrado
    if (usersData.some(user => user.username === username)) {
        alert('El nombre de usuario ya está registrado. Por favor, elige otro.');
        return;
    }

    // Agregar los nuevos datos de registro al arreglo
    usersData.push({ username: username, password: password });

    // Guardar el arreglo actualizado en localStorage
    localStorage.setItem('usersData', JSON.stringify(usersData));

    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    $registerForm.style.display = 'none';
    $loginForm.style.display = 'block';
}

// Función para realizar el inicio de sesión
function handleLogin() {
    const loginUsername = document.querySelector('#loginUsername').value;
    const loginPassword = document.querySelector('#loginPassword').value;

    // Obtener los datos del registro almacenados en localStorage
    const storedData = localStorage.getItem('usersData');

    if (storedData) {
        const usersData = JSON.parse(storedData);
        const userData = usersData.find(user => user.username === loginUsername);
        if (userData && userData.password === loginPassword) {
            alert('Inicio de sesión exitoso. Bienvenido, ' + userData.username + '!');
        } else {
            alert('Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
        }
    } else {
        alert('Aún no te has registrado. Por favor, crea una cuenta antes de iniciar sesión.');
    }
}

// Agregar eventos a los botones de registro e inicio de sesión
document.querySelector('#btnRegister').addEventListener('click', function() {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    saveRegistrationData(username, password);
});

document.querySelector('#btnLogin').addEventListener('click', handleLogin);