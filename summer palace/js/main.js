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
        document.querySelector('.burger__menu').style.display = 'block';
        document.body.style.overflow = 'hidden';
        burgerIsActive = !burgerIsActive;
    } else {
        document.querySelector('.burger__menu').style.display = 'none'
        document.body.style.overflow = ''
        burgerIsActive = !burgerIsActive;
    }
})
