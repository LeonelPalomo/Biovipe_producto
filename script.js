document.addEventListener("DOMContentLoaded", function() {
    // Carrusel de juegos destacados
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    let carouselIndex = 0;
    const carouselItems = document.querySelectorAll('.juego');
    const totalItems = carouselItems.length;
    const itemWidth = carouselItems[0].offsetWidth;

    nextBtn.addEventListener('click', function() {
        carouselIndex = (carouselIndex + 1) % totalItems;
        updateCarousel();
    });

    prevBtn.addEventListener('click', function() {
        carouselIndex = (carouselIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -carouselIndex * itemWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    }

    // Filtrado por categorías
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = button.dataset.category;
            carouselItems.forEach(item => {
                if (category === 'todos' || item.classList.contains(category)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
