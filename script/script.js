document.addEventListener('DOMContentLoaded', function () {
    // burger
    let openBurger = document.querySelector('.header__burger')
    let closeBurger = document.querySelector('.header__close');
    let addressBlock = document.querySelector('.address');
    let logo = document.querySelector('.address__logo-link');
    let header = document.querySelector('.header__container');
    let address = document.querySelector('.address__addr-link');
    let email = document.querySelector('.address__email');
    let tel = document.querySelector('.social__link-tel');
    let emailSvg = document.querySelector('.address__email-path');
    let burgerColor = document.querySelector('.header__burger');

    addEventListener("scroll", (e) => {
        if(!header.classList.contains('header--active')){
          if(window.scrollY == 0){
            header.classList.remove('bg-white');
            header.style.borderColor = "var(--gray)";
            address.style.color = "var(--color-white)";
            email.style.color = "var(--color-white)";
            tel.style.color = "var(--color-white)";
            emailSvg.style.stroke = "var(--color-white)";
            burgerColor.classList.remove('dark');
            } else {
            header.classList.add('bg-white');
            header.style.borderColor = "var(--color-white)";
            address.style.color = "var(--text-dark-color)";
            email.style.color = "var(--text-dark-color)";
            tel.style.color = "var(--text-dark-color)";
            emailSvg.style.stroke = "var(--text-dark-color)";
            burgerColor.classList.add('dark');
            }
        }
      });

    openBurger.addEventListener('click', function () {
      header.classList.add('header--active');
      openBurger.style.display = "none";
      logo.style.display = "none";
      closeBurger.style.display = "block";
      addressBlock.style.display = "block";
      address.style.color = "var(--color-white)";
      email.style.color = "var(--color-white)";
      tel.style.color = "var(--color-white)";
      emailSvg.style.stroke = "var(--color-white)";
    })
    closeBurger.addEventListener('click', function () {
      header.classList.remove('header--active');
      openBurger.style.display = "block";
      logo.style.display = "block";
      closeBurger.style.display = "none";
      addressBlock.style.display = "none";
    })
  

    // swiper
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView:1,
        spaceBetween:20,
        initialSlide:3,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },

        breakpoints:{
          375:{
            slidesPerView:1,
            spaceBetween:10,
            initialSlide:3,
          },
          475:{
            slidesPerView:2,
            spaceBetween:20,
          },
          906:{
            slidesPerView:3,
            spaceBetween:20,
          }
        }
      });

      // map
      ymaps.ready(init);
      var myMap;
  
      function init(){     
          myMap = new ymaps.Map ("map", {
              center: [55.71746957709442,37.66573790509033],
              zoom: 16,
          });
          let myPlacemark = new ymaps.Placemark([55.71717509334019, 37.6658371468239], {}, {
                iconLayout: 'default#image',
                iconImageHref: '../img/map.svg',
                iconImageSize: [33, 48],
                iconImageOffset: [-18, -50]
              });
              myMap.geoObjects.add(myPlacemark);
      };


      
  })

  