// funcion para las imagenes
$(function () {
  // clase de las  img
  $(".filter").click(function () {
    //   css
    $(this).addClass("active").siblings().removeClass("active");
    // attr = atributo
    let valor = $(this).attr("data-nombre");
    if (valor == "todos") {
      $(".cont-work").show("1000");
    } else {
      $(".cont-work")
        .not("." + valor)
        .hide(1000);
      $(".cont-work")
        .filter("." + valor)
        .show(1000);
    }
  });
  // tomamos las secciones id
  let equipo = $("#equipo").offset().top,
    servicio = $("#servicio").offset().top,
    trabajo = $("#trabajo").offset().top,
    contacto = $("#contacto").offset().top;
  // se declara de nuevo las variables para q se puedan utilizar con el responsive
  window.addEventListener("resize", function () {
    let equipo = $("#equipo").offset().top,
      servicio = $("#servicio").offset().top,
      trabajo = $("#trabajo").offset().top,
      contacto = $("#contacto").offset().top;
  });
  // e = al evento , realizacion de scrol que hace uso de las variables iniciales
  $("#enlace-inicio").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      600
    );
  });

  $("#enlace-equipo").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: equipo -90 ,
      },
      600
    );
  });

  $('#enlace-servicio').on('click', function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: servicio -90 ,
      },
      600
    );
  });

  $("#enlace-trabajo").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: trabajo -90 ,
      },
      600
    );
  });
  
  $("#enlace-contacto").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: contacto -90 ,
      },
      600
    );
  });






});
