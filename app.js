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

// slide

  // Params
  let mainSliderSelector = '.main-slider',
  navSliderSelector = '.nav-slider',
  interleaveOffset = 0.5;
  
  // Main Slider
  let mainSliderOptions = {
    loop: true,
    speed:1000,
    autoplay:{
      delay:2000
    },
    loopAdditionalSlides: 10,
    grabCursor: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      init: function(){
        this.autoplay.stop();
      },
      imagesReady: function(){
        this.el.classList.remove('loading');
        this.autoplay.start();
      },
      slideChangeTransitionEnd: function(){
        let swiper = this,
            captions = swiper.el.querySelectorAll('.caption');
        for (let i = 0; i < captions.length; ++i) {
          captions[i].classList.remove('show');
        }
        swiper.slides[swiper.activeIndex].querySelector('.caption').classList.add('show');
      },
      progress: function(){
        let swiper = this;
        for (let i = 0; i < swiper.slides.length; i++) {
          let slideProgress = swiper.slides[i].progress,
              innerOffset = swiper.width * interleaveOffset,
              innerTranslate = slideProgress * innerOffset;
         
          swiper.slides[i].querySelector(".slide-bgimg").style.transform =
            "translateX(" + innerTranslate + "px)";
        }
      },
      touchStart: function() {
        let swiper = this;
        for (let i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = "";
        }
      },
      setTransition: function(speed) {
        let swiper = this;
        for (let i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = speed + "ms";
          swiper.slides[i].querySelector(".slide-bgimg").style.transition =
            speed + "ms";
        }
      }
    }
  };
  let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);
  
  // Navigation Slider
  let navSliderOptions = {
    loop: true,
    loopAdditionalSlides: 10,
    speed:1000,
    spaceBetween: 5,
    slidesPerView: 5,
    centeredSlides : true,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    direction: 'vertical',
    on: {
      imagesReady: function(){
        this.el.classList.remove('loading');
      },
      click: function(){
        mainSlider.autoplay.stop();
      }
    }
  };
  let navSlider = new Swiper(navSliderSelector, navSliderOptions);
  
  // Matching sliders
  mainSlider.controller.control = navSlider;
  navSlider.controller.control = mainSlider;






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


