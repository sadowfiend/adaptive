$(function () {
    $('.menu-open').click(function () {
        $('.header__link').toggleClass('show-menu')
    })
});

window.addEventListener('load', () => {

    const left = document.querySelector('#left');
    const right = document.querySelector('#right');

    const slider = document.querySelector('.portfolio__slider');
    const img = document.querySelectorAll('.portfolio__slider img');

    let counter = 0;
    const stepSize = img[0].clientWidth;
    slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
    right.addEventListener('click', ()=>{
        if (counter >= img.length - 1) counter = -1;
        slider.classList.add('transformAnimation');
        counter++;
        slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;

    });

    left.addEventListener('click', ()=>{
        if (counter <=0) counter = img.length;
        slider.classList.add('transformAnimation');
        counter--;
        slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
    });
});