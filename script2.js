
// Select the menu button and navigation links
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Toggle mobile navigation
menuBtn.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.textContent = isOpen ? "✕" : "☰";
});

// Close menu when a navigation link is clicked
const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "☰";
    });
});