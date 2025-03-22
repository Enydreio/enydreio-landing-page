const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length; // Gehe zurück zum ersten Bild, wenn wir das letzte erreicht haben
    slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 5000); // Alle 5 Sekunden wechseln
