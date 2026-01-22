/* =========================
   MENU
========================= */
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    sidebar.classList.toggle("show");
    overlay.classList.toggle("show");
}

/* =========================
   CONFIGURACIÓN GLOBAL
========================= */
Chart.defaults.font.family = "Poppins";
Chart.defaults.color = "#1f2a63";

/* =========================
   RADAR GENERAL
========================= */
new Chart(document.getElementById("radarGeneral"), {
    type: "radar",
    data: {
        labels: ["Matemáticas", "Lectura", "Ciencias", "Sociales", "Inglés"],
        datasets: [{
            label: "Promedio general",
            data: [65, 70, 60, 68, 72],
            backgroundColor: "rgba(47,95,208,0.2)",
            borderColor: "#2f5fd0",
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: { min: 0, max: 100 }
        }
    }
});

/* =========================
   RADAR POR MATERIAS
========================= */
new Chart(document.getElementById("radarMaterias"), {
    type: "radar",
    data: {
        labels: ["Matemáticas", "Lectura", "Ciencias", "Sociales", "Inglés"],
        datasets: [{
            label: "Resultados por materia",
            data: [70, 75, 65, 72, 78],
            backgroundColor: "rgba(244,196,48,0.3)",
            borderColor: "#f4c430",
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: { min: 0, max: 100 }
        }
    }
});

/* =========================
   PIE ACTIVOS
========================= */
new Chart(document.getElementById("pieActivos"), {
    type: "pie",
    data: {
        labels: ["Activos", "Inactivos"],
        datasets: [{
            data: [80, 20],
            backgroundColor: ["#2f5fd0", "#d3d6e4"]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: "bottom" }
        }
    }
});

/* =========================
   BARRAS POR GRADO
========================= */
new Chart(document.getElementById("barGrados"), {
    type: "bar",
    data: {
        labels: ["9°", "10°", "11°"],
        datasets: [{
            data: [60, 68, 75],
            backgroundColor: "#1f2a63",
            borderRadius: 8
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: { min: 0, max: 100 }
        },
        plugins: {
            legend: { display: false }
        }
    }
});
