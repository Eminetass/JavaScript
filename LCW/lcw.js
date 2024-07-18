let currentIndex = 0;

function slideLeft() {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const items = document.querySelectorAll('.product-alt');
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = items.length - 1;
    }
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function slideRight() {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const items = document.querySelectorAll('.product-alt');
    if (currentIndex < items.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}