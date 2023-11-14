var slides = document.querySelectorAll('.slide__box');
var i = 1;
setInterval(function() {
    slides.forEach(function(slide) {
        slide.style.display = 'none';
    });
    if (slides[i]) {
        slides[i].style.display = 'block';
    }
    i++;
    if (i == 4) {
        i = 0;
    }
}, 4000);