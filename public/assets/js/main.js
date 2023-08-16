$(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 5,
        nav: false,
        loop: false
      }
    }
  })
})
/* TOOLTIP */
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
})
/* ALERTA BOTON */
$("#enviarCorreo").click(function () {
  alert("The email was sent successfully.");
});
$("#agregarFavorito").click(function () {
  alert("The recipe has been added to your favorites.");
});

$(document).ready(function () {
  $('.active-modal').on('click', function () {
    var imageSrc = $(this).attr('src');
    var modal = $('#my-modal');
    modal.find('#modal-img').attr('src', imageSrc);
    modal.modal('show');
  })
})
