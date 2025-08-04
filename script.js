// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        if (window.innerWidth <= 768) {
            document.querySelector('nav ul').classList.add('hidden');
            document.querySelector('#menu-toggle').textContent = '☰';
        }
    });
});

// Hamburger menu toggle
const menuToggle = document.getElementById('menu-toggle');
menuToggle.addEventListener('click', () => {
    const navUl = document.querySelector('nav ul');
    navUl.classList.toggle('hidden');
    navUl.classList.toggle('active');
    menuToggle.textContent = navUl.classList.contains('active') ? '✖' : '☰';
});

// Form validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Message sent! (This is a demo, the form is not connected to a server.)');
    this.reset();
});

// Carousel management
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) currentSlide = 0;
    if (index < 0) currentSlide = totalSlides - 1;
    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

// Automatic slide change every 5 seconds
setInterval(nextSlide, 5000);

// Show first slide on load
showSlide(currentSlide);

// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Responsive handling
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        document.querySelector('nav ul').classList.remove('hidden', 'active');
        document.querySelector('#menu-toggle').textContent = '☰';
    } else {
        document.querySelector('nav ul').classList.add('hidden');
        document.querySelector('nav ul').classList.remove('active');
    }
});

// Initialization on load
if (window.innerWidth <= 768) {
    document.querySelector('nav ul').classList.add('hidden');
}