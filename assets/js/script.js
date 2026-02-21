function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('open');
}

function closeMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.remove('open');
}

document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const navLinks = document.getElementById('nav-links');
    if (navLinks && !nav.contains(event.target)) {
        navLinks.classList.remove('open');
    }
});

particlesJS("particles-js", {
    particles: {
        number: { value: 120, density: { enable: true, value_area: 900 } },
        color: { value: ["#ffffff", "#a5c9ff", "#64c8ff"] },
        shape: { type: "circle" },
        opacity: {
            value: 0.6,
            random: true,
            anim: { enable: true, speed: 0.8, opacity_min: 0.05, sync: false }
        },
        size: {
            value: 3.5,
            random: true,
            anim: { enable: true, speed: 2, size_min: 1, sync: false }
        },
        line_linked: { enable: false },
        move: {
            enable: true,
            speed: 1.8,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: false },
            onclick: { enable: false },
            resize: true
        }
    },
    retina_detect: true
});
