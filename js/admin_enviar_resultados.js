/* MENU */
function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("show");
}

/* BUSQUEDA */
function filterStudents() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const rows = document.querySelectorAll("#studentsTable tbody tr");

    rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(input) ? "" : "none";
    });
}

/* ENVÍO INDIVIDUAL */
function sendResult(studentId) {
    if (confirm(`¿Enviar resultados al estudiante ${studentId}?`)) {
        alert(`Resultados enviados al estudiante ${studentId} (simulación)`);
    }
}

/* ENVÍO MASIVO */
function sendAllResults() {
    if (confirm("¿Enviar resultados a TODOS los estudiantes?")) {
        alert("Resultados enviados a todos los estudiantes (simulación)");
    }
}

/* PDF */
function exportPDF(studentId) {
    alert(`PDF generado para el estudiante ${studentId} (simulación)`);
}

function exportAllPDF() {
    alert("PDFs generados para todos los estudiantes (simulación)");
}

console.log("Módulo Enviar Resultados cargado correctamente");
