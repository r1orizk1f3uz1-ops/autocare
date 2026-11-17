// Ketika tombol menu diklik
menuToggle.addEventListener("click", function () {

    // Menampilkan atau menyembunyikan menu
    navMenu.classList.toggle("show");

    // Memperbarui status tombol
    const isOpen = navMenu.classList.contains("show");

    menuToggle.setAttribute("aria-expanded", isOpen);

    // Mengubah ikon menu
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Menutup menu setelah salah satu link diklik
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("show");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});