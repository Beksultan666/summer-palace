$(function () {
    $('.header__slider').slick({
        arrows: true,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/prev-arrow.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/next-arrow.svg" alt=""></button>',
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    });
});

let burgerIsActive = false;

document.querySelector('.burger__btn').addEventListener("click", () => {
    document.querySelector('.burger__btn').classList.toggle('burger__btn--active');
    if (burgerIsActive === false) {
        document.querySelector('.burger__menu').style.opacity = 1;
        document.querySelector('.burger__menu').style.visibility = 'visible';
        document.body.style.overflow = 'hidden';
        burgerIsActive = true;
    } else {
        document.querySelector('.burger__menu').style.opacity = 0;
        document.querySelector('.burger__menu').style.visibility = 'hidden';
        document.body.style.overflow = '';
        burgerIsActive = false;
    }
})
