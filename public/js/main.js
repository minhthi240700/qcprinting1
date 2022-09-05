$('.items').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: '<div class="slick-prev"><i class="fas fa-angle-left"></i><span class="sr-only sr-only-focusable"><</span></div>',
  prevArrow: '<div class="slick-next"><i class="fas fa-angle-right"></i><span class="sr-only sr-only-focusable">></span></div>',
});

$('.items_news').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  nextArrow: '<div class="slick-prev"><i class="fas fa-angle-left"></i><span class="sr-only sr-only-focusable"><</span></div>',
  prevArrow: '<div class="slick-next"><i class="fas fa-angle-right"></i><span class="sr-only sr-only-focusable">></span></div>',
});

var listPage = document.querySelectorAll('.page')

function activePage () {
    listPage.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add('active');
}

listPage.forEach((item) => item.addEventListener('click', activePage));


$(document).ready(function() {
  $('.nav__mobile').click(function() {
    $('.menu__list').slideToggle();
  })
})
