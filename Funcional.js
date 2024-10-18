// Funcionalidad para los botones de toggle
document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const content = button.parentNode.nextElementSibling;
            content.classList.toggle('hidden');
            button.textContent = content.classList.contains('hidden') ? '▼' : '▲';
        });
    });

    // Inicializar todas las secciones como ocultas
    document.querySelectorAll('.content').forEach(content => {
        content.classList.add('hidden');
    });

    // Funcionalidad para el slider
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Cambiar slide cada 5 segundos
    setInterval(nextSlide, 5000);

    // Mostrar el primer slide
    showSlide(0);

    // Opcional: Añadir navegación con el teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });
});