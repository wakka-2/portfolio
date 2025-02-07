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
document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": ["#4dabf7", "#3bc9db", "#5c7cfa"]
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
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
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
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
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
});

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

// Advanced Smooth Scrolling
function smoothScroll(target, duration = 1000) {
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Custom easing function (cubic-bezier like)
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }

    requestAnimationFrame(animation);
}

// Replace default smooth scrolling with custom implementation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        // Remove any existing scroll-target classes
        document.querySelectorAll('.scroll-target').forEach(el => {
            el.classList.remove('scroll-target');
        });

        // Add scroll target animation
        target.classList.add('scroll-target');
        setTimeout(() => {
   
        }, 1000);

        smoothScroll(target);
    });
});

// Track social media clicks
document.querySelectorAll('.social-icon').forEach(social => {
    social.addEventListener('click', () => {
        const platform = social.querySelector('i').className.includes('github') ? 'github' : 'linkedin';
        logEvent(analytics, 'social_click', {
            platform: platform
        });
    });
});

// Track theme toggle
document.getElementById('theme-switch').addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    logEvent(analytics, 'theme_toggle', {
        theme: currentTheme
    });
});