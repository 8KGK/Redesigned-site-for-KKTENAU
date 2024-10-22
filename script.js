let currentSlide = 0;
const slides = document.querySelectorAll('.featured_box');
const slideInterval = 5000;  // 5 секунд

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}


showSlide(currentSlide);// завантаження першого слайда при запуску сайта

//зміна слайдів
setInterval(nextSlide, slideInterval);
