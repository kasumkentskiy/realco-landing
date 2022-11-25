
$(function () {
  $('.nav__menu-burger').on('click', function () {
    $('.nav__menu').toggleClass('nav__menu--active');
    $('.nav__menu-burger').toggleClass('nav__menu-burger--close');
    $('.logo').toggleClass('logo--active');
  });

  ScrollReveal().reveal('.header', {
    reset: true,
    // scale: 0.5,
    distance: '100px',
    origin: 'top',
  });
  ScrollReveal().reveal('.howitworks', {
    reset: true,
    // scale: 0.5,
    distance: '100px',
    origin: 'bottom',
  });
  ScrollReveal().reveal('.properties__content-item', {
    reset: true,
    // scale: 0.5,
    distance: '-100px',
    origin: 'right',
  });
  ScrollReveal().reveal('.locations__items', {
    reset: true,
    scale: 0.5,
    distance: '-100px',
    origin: 'right',
  });
  ScrollReveal().reveal('.slogan', {
    reset: true,
    // scale: 0.5,
    distance: '100px',
    origin: 'bottom',
  });
  ScrollReveal().reveal('.reviews', {
    reset: true,
    // scale: 0.5,
    distance: '100px',
    origin: 'top',
  });
  ScrollReveal().reveal('.blog', {
    reset: true,
    // scale: 0.5,
    distance: '-100px',
    origin: 'right',
  });
  ScrollReveal().reveal('.footer', {
    reset: true,
    // scale: 0.5,
    distance: '-200px',
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
  });

  $(".reviews__content-stars").rateYo({
    
    starWidth: "20px",
    ratedFill: "#CF6F49",
    readOnly: true,
  });

});

