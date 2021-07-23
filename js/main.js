// variables scroll de menu
let nav = document.getElementById("nav");
let menu = document.getElementById("enlaces");
// variables para el icono desplegable
let abrir = document.getElementById("open");
let botones = document.getElementsByClassName("btn-header");
let cerrado = true;

function menus() {
  let desplazamiento_actual = window.pageYOffset;
  //   cuando el scroll pase de los 300 vertical entra el if
  if (desplazamiento_actual <= 300) {
    nav.classList.remove("nav2");
    nav.className = "nav1";
    nav.style.transition = "1s";
    menu.style.top='80px';
  } else {
    nav.classList.remove("nav1");
    nav.className = "nav2";
    menu.style.top='90px';
  }
}
// para desplegar el menu
function apertura() {
  if (cerrado) {
    menu.style.width = "88%";
    cerrado = false;
  } else {
    menu.style.width = "0%";
    menu.style.overflow = "hidden";
    cerrado = true;
  }
}

// para q cuando cargue la pagina esta no se quede con el scrol del menu opcional
window.addEventListener("load", menus);
window.addEventListener("load", function () {
  // uso del jquery
  $('#onload').fadeOut();
  $('body').removeClass('hidden');
  menus();
});
// se crea una funcion para cuando se haga scroll
window.addEventListener("scroll", function () {
  // imprime en la consola el numero del scrol
  console.log(window.pageYOffset);
  menus();
});

abrir.addEventListener("click", function () {
  apertura();
});
// para que cuando el menu quede abierto este cuando aumte el ancho no se rompa
window.addEventListener("resize", function () {
  if (screen.width >= 717) {
    cerrado=true;
    menu.style.removeProperty('overflow');
    menu.style.removeProperty('width');

  }
});
window.addEventListener('click',function(e){
  console.log(e.target);
  // cuando este abierto el menu
  if(cerrado == false){
    let span = document.querySelector('span');
    if(e.target !== span && e.target !== abrir){
      menu.style.width ='0%';
      menu.style.overflow ='hidden';
      cerrado=true;
    };

  }  
  
});