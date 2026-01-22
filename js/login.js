const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        alert("Por favor completa todos los campos");
        return;
    }

    // Mockup de autenticación
    if (email === "admin@gmail.com" && password === "123") {
        alert("Inicio de sesión exitoso");
        window.location.href = "../html/admin.html";
    } else {
        alert("Correo o contraseña incorrectos");
    }
});
