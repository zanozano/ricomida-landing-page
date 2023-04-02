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
  alert("El correo fue enviado correctamente");
});
$("#agregarFavorito").click(function () {
  alert("Se ha agregado la receta a tus favoritos");
});
/*CAMBIO DE COLOR */
$(".ingredients").on('dblclick', function () {
  $(this).css('color', 'red');
});
$(".making").on('dblclick', function () {
  $(this).css('color', 'red');
});
/* TOGGLE INFORMACION */
$('#card-panqueque').on('click', function () {
  $('#panqueque').toggle();
});
$('#card-tiramisu').on('click', function () {
  $('#tiramisu').toggle();
});
$('#card-plateada').on('click', function () {
  $('#plateada').toggle();
});
