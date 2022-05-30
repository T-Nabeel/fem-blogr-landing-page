const body = document.querySelector('body');
const header = document.querySelector('header');
const btnHamburger = document.querySelector('#btnHamburger');

// Mobile menu
const fadeElements = document.querySelectorAll('.non-visible')

// Mobile dropdown menu
const ProductLink = document.querySelector('#mobileProductLink');
const ProductMenu = document.querySelector('#mobileProductMenu');

const CompanyLink = document.querySelector('#mobileCompanyLink');
const CompanyMenu = document.querySelector('#mobileCompanyMenu');

const ConnectLink = document.querySelector('#mobileConnectLink');
const ConnectMenu = document.querySelector('#mobileConnectMenu');


// Mobile Hamburger icon click event
btnHamburger.addEventListener('click', function() {

  // Close mobile menu
  if (header.classList.contains('mobile-menu')) {
    body.classList.remove('noscroll');
    header.classList.remove('mobile-menu');
    fadeElements.forEach(function(element) {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  }
  // Open mobile menu
  else {
    body.classList.add('noscroll');
    header.classList.add('mobile-menu');
    fadeElements.forEach(function(element) {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
  }
});


// Mobile menu drop effect using jQuery
$(ProductLink).click(function() {
  $(ProductMenu).slideToggle();
  $(CompanyMenu).slideUp(200);
  $(ConnectMenu).slideUp(200);
});

$(CompanyLink).click(function() {
  $(CompanyMenu).slideToggle();
  $(ProductMenu).slideUp(200);
  $(ConnectMenu).slideUp(200);
});

$(ConnectLink).click(function() {
  $(ConnectMenu).slideToggle();
  $(ProductMenu).slideUp(200);
  $(CompanyMenu).slideUp(200);
});

AOS.init({
  duration: 1000
});