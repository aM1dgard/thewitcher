const swiper = new Swiper('.swiper-container', {
   slidesPerView:1,
   loop: true,
   navigation: {
    nextEl: '.arrow',
    
  },
  breakpoints: {
    540: {
      slidesPerView: 2
      
    }
  }

  });

  const menuButton = document.querySelector('.menu-btn');
  const menu = document.querySelector('.header');
 
  menuButton.addEventListener('click', function() {
    menu.classList.toggle('header-active');
    menuButton.classList.toggle('menu-btn-active');
  })