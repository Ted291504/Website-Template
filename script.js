document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Carousel functionality
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentItem = 0;

    function showItem(index) {
        carouselItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    prevButton.addEventListener('click', () => {
        currentItem = (currentItem === 0) ? carouselItems.length - 1 : currentItem - 1;
        showItem(currentItem);
    });

    nextButton.addEventListener('click', () => {
        currentItem = (currentItem === carouselItems.length - 1) ? 0 : currentItem + 1;
        showItem(currentItem);
    });

    showItem(currentItem);
});
