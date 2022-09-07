$('.banner').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  nextArrow: '<div class="slick-prev"><i class="fas fa-angle-left"></i><span class="sr-only sr-only-focusable"><</span></div>',
  prevArrow: '<div class="slick-next"><i class="fas fa-angle-right"></i><span class="sr-only sr-only-focusable">></span></div>',
});

$('.items_news').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: false,
  nextArrow: '<div class="slick-prev"><i class="fas fa-angle-left"></i><span class="sr-only sr-only-focusable"><</span></div>',
  prevArrow: '<div class="slick-next"><i class="fas fa-angle-right"></i><span class="sr-only sr-only-focusable">></span></div>',
  responsive: [

    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});

$('.category-mobile').slick({
  slidesToShow: 1,
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


// $(document).ready(function() {
//   $('.nav__mobile').click(function() {
//     $('.menu__list').slideToggle();
//   })
// })





// menu mobile

var nav_mobile = document.querySelector('.nav-mobile')
var menu_show = document.querySelector('.menu_mobile')

console.log(menu_show);

nav_mobile.onclick = function() {
    nav_mobile.classList.toggle('active')
    menu_show.classList.toggle('show')
}




// End menu mobile
