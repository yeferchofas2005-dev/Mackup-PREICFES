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
   MODAL
========================= */
function openModal() {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(e) {
    const modal = document.getElementById("modal");
    if (e.target === modal) closeModal();
};

/* =========================
   VER PREGUNTAS
========================= */
function verPreguntas() {
    // Página que se implementará luego
    window.location.href = "admin_grupo_preguntas_ver_preguntas.html";
}
