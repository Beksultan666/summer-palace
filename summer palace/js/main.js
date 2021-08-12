$(function(){
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
    })
})

let burger__btn = document.querySelector('.burger__btn').onclick = function(){
    document.getElementsByClassName('burger__menu')[0].style.display = 'block'
}
let close = document.querySelector('.close').onclick = function(){
    document.getElementsByClassName('burger__menu')[0].style.display = 'none'
}