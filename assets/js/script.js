function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('open');
}

function closeMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.remove('open');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const navLinks = document.getElementById('nav-links');
    if (navLinks && !nav.contains(event.target)) {
        navLinks.classList.remove('open');
    }
});