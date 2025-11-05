const slides = document.getElementById('slides');
const totalSlides = slides.children.length;
var slideWidth = slides.children[0].offsetWidth;
let index = 0;
var vw = window.innerWidth;
var end_point = (slideWidth * totalSlides) - vw + 39;


document.getElementById('next').addEventListener('click', () => {
    document.getElementById('prev').classList.remove('hido');

    var current_index = slides.dataset.index ? parseInt(slides.dataset.index) : 0;
    if ((end_point - current_index) >= slideWidth) {//click_count + 1 < (totalSlides - 1)
        index += slideWidth;
    } else {
        index = end_point;
        document.getElementById('next').classList.add('hido');
    }

    updateSlide();
});

document.getElementById('prev').addEventListener('click', () => {
    document.getElementById('next').classList.remove('hido');

    var current_index = slides.dataset.index ? parseInt(slides.dataset.index) : 0;
    if (current_index >= slideWidth) {//click_count > 0
        index -= slideWidth;
    } else {
        index = 0;
        document.getElementById('prev').classList.add('hido');
    }

    updateSlide();
});

function updateSlide() {
    slides.style.transform = `translateX(-${index}px)`;
    slides.dataset.index = index;
}