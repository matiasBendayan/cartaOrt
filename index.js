let slideIndex = 1;
showSlides(slideIndex);
platos = [];

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function validarCampos(event){
  event.preventDefault();

  if(document.getElementById("nombre").value && document.getElementById("tel").value && document.getElementById("direc").value && document.getElementById("menuEntero").value){
    alert("Pedido enviado! \n"  + platos.toString() + "\n Gracias!");
  }
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function agregarAPedido(event,plato){
  if(event.target.checked){
    platos.push(plato);
  }else{
    platos = platos.filter(platoSeleccionado=>plato !== platoSeleccionado);
  }
  let elem = document.getElementById("menuEntero");
  elem.value = platos.toString();
}