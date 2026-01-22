/* MENU */
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    sidebar.classList.toggle("show");
    overlay.classList.toggle("show");
}

/* MODAL */
function openModal() {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function (e) {
    const modal = document.getElementById("modal");
    if (e.target === modal) closeModal();
};

/* CHART CONFIG */
Chart.defaults.font.family = "Poppins";
Chart.defaults.color = "#1f2a63";

/* RADAR */
new Chart(document.getElementById("radarSimulacro"), {
    type: "radar",
    data: {
        labels: ["Matemáticas", "Lectura", "Ciencias", "Sociales", "Inglés"],
        datasets: [{
            label: "Promedio general",
            data: [68, 72, 65, 70, 74],
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

/* PIE */
new Chart(document.getElementById("pieEstado"), {
    type: "pie",
    data: {
        labels: ["Con resultados", "Pendientes"],
        datasets: [{
            data: [1, 1],
            backgroundColor: ["#2f5fd0", "#ccc"]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

/* BAR */
new Chart(document.getElementById("barPromedios"), {
    type: "bar",
    data: {
        labels: ["Simulacro 1", "Simulacro 2"],
        datasets: [{
            data: [68, 0],
            backgroundColor: "#1f2a63"
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
