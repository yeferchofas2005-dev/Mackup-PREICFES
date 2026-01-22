/* =======================
   MENU HAMBURGUESA
======================= */
function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("show");
}

/* =======================
   SEGURIDAD
======================= */

// Cambio de contraseña (simulado)
function changePassword() {
    const current = document.getElementById("currentPassword").value;
    const newPass = document.getElementById("newPassword").value;
    const confirm = document.getElementById("confirmPassword").value;

    if (!current || !newPass || !confirm) {
        alert("Completa todos los campos");
        return;
    }

    if (newPass !== confirm) {
        alert("Las contraseñas no coinciden");
        return;
    }

    if (newPass.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres");
        return;
    }

    alert("Contraseña actualizada correctamente (simulación)");
}

// Cerrar todas las sesiones activas
function closeSessions() {
    if (confirm("¿Estás seguro de cerrar todas las sesiones activas?")) {
        alert("Todas las sesiones han sido cerradas (simulación)");
    }
}

// Bloquear usuario
function blockUser() {
    const code = document.getElementById("blockUserCode").value;

    if (!code) {
        alert("Ingresa un código de usuario");
        return;
    }

    if (confirm(`¿Deseas bloquear al usuario ${code}?`)) {
        alert(`Usuario ${code} bloqueado correctamente (simulación)`);
    }
}

/* =======================
   LOG DE CARGA
======================= */
/*
Aquí va lógica REAL de negocio:
- Guardar reglas del sistema
- Validar períodos académicos activos
- Controlar visibilidad de resultados
- Auditoría y trazabilidad
- Integración con backend
*/

console.log("Funciones administrativas cargadas correctamente");
