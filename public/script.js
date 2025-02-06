// Custom Cursor
const cursor = document.querySelector('.custom-cursor');
const cursorDot = document.querySelector('.cursor-dot');
const buttons = document.querySelectorAll('a, button, .skill-item, .project-card, .social-icon');

// Update cursor position
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
});

// Add hover effect
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
    });
    button.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});

// Hide cursor when it leaves the window
document.addEventListener('mouseleave', () => {
    cursor.style.display = 'none';
    cursorDot.style.display = 'none';
});

document.addEventListener('mouseenter', () => {
    cursor.style.display = 'block';
    cursorDot.style.display = 'block';
});

// Initialize Particles.js
particlesJS('particles-js',
    {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#4dabf7"
            },
            "shape": {
                "type": "circle"
            },
            "opacity": {
                "value": 0.5,
                "random": false
            },
            "size": {
                "value": 3,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#4dabf7",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            }
        },
        "retina_detect": true
    }
);

// Theme Switcher
const themeSwitch = document.getElementById('theme-switch');
const htmlElement = document.documentElement;
const themeSwitchIcon = themeSwitch.querySelector('i');

// Check for saved theme preference, otherwise use device preference
const savedTheme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
htmlElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

// Theme switch event listener
themeSwitch.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeSwitchIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// Initialize ScrollReveal for smooth animations
ScrollReveal().reveal('.project-card', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    interval: 200
});

ScrollReveal().reveal('.skill-item', {
    delay: 200,
    distance: '20px',
    origin: 'bottom',
    interval: 100
});

ScrollReveal().reveal('.hero-text', {
    delay: 200,
    distance: '50px',
    origin: 'left'
});

ScrollReveal().reveal('.hero-image', {
    delay: 400,
    distance: '50px',
    origin: 'right'
});

// Initialize Typed.js for the typewriter effect
const typed = new Typed('.typewriter', {
    strings: ['Web Developer', 'UI/UX Designer', 'Problem Solver'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});