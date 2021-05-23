const burgerMenu = document.querySelector('.header__burger')
burgerMenu.addEventListener('click', function () {
   const headerList = document.querySelector('.header__list')
   const toggleSlider = document.querySelector('.slider-toggle')
   toggleSlider.classList.toggle('active')
   headerList.classList.toggle('active')
   burgerMenu.classList.toggle('active')
   document.body.classList.toggle('active')

})

function ibg() {
   let ibg = document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
         ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}
ibg();