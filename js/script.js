let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
loop:true,
  });

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
loop:true,
breakpoints:{
  0 : {
    slidesPerView: 1,
  },
  640 : {
    slidesPerView: 2,
  },
  768 : {
    slidesPerView: 2,
  },
  1024 : {
    slidesPerView: 3,
  }
}
  });

  const list = document.querySelectorAll('.list');
  function activeLink(){
      list.forEach((item) =>
      item.classList.remove('active'));
      this.classList.add('active');
  }

  list.forEach((item) =>
 
 item.addEventListener('click', activeLink));


function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 300);
}

window.onload = fadeOut;

