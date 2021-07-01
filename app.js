const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

// Service






// var $slide = $(".slide")
//   .slick({
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     speed: 2000,
//     autoplaySpeed: 4000,
//     autoplay: true
//   })
//   .on({
//     beforeChange: function(event, slick, currentSlide, nextSlide) {
//       $(".slick-slide", this).eq(currentSlide).addClass("preve-slide");
//       $(".slick-slide", this).eq(nextSlide).addClass("slide-animation");
//     },
//     afterChange: function() {
//       $(".preve-slide", this).removeClass("preve-slide　slide-animation");
//     }
//   });
// $slide.find(".slick-slide").eq(0).addClass("slide-animation");


