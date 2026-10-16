document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Efecto sombra en la barra de navegación al hacer scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Animaciones Reveal (Aparecer al hacer scroll)
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    // Ejecutar al inicio por si elementos ya están en pantalla
    revealOnScroll();
    
    // Ejecutar durante el scroll
    window.addEventListener('scroll', revealOnScroll);
});