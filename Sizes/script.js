alert ('Тебе нравится мой сайт?')

document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.sizes__slider', {
    loop: true,
    grabCursor: true,
    fadeEffect: { crossFade: true},
    navigation: {
      nextEl: '.next',
      prevEl: '.prev'},});});
