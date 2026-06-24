const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';},},
     on: {
        init: function () {
            updatePagination(this);},

        slideChange: function () {
            updatePagination(this);}
}});

function updatePagination(swiper) {

    let bullets = document.querySelectorAll('.swiper-pagination-bullet');

    bullets.forEach((bullet, index) => {
        bullet.innerHTML = '';

        if (index === swiper.realIndex) {
            bullet.innerHTML = index + 1;
        }
    });

}


    




