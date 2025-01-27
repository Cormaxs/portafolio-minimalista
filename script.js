document.addEventListener('DOMContentLoaded', () => {
    // Obtener el botón
// Obtenemos el botón
const botonArriba = document.querySelector('.arriba-btn');

// Función para mostrar el botón cuando el scroll es mayor a 200px
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    botonArriba.style.display = 'block'; // Mostrar el botón
  } else {
    botonArriba.style.display = 'none'; // Ocultar el botón si no se ha hecho scroll suficiente
  }
});

// Función para el scroll suave hacia arriba
botonArriba.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Hace que el desplazamiento sea suave
  });
});


  });
  




  //modo nocturno

// Seleccionar el botón
// Seleccionar el botón de toggle
const modo = document.querySelector('#invertirtema');
const btnDN = document.querySelector('#invertirtema');
const luna = btnDN.querySelector('.fa-moon'); 
const sol = btnDN.querySelector('.fa-sun');

// Escuchar el evento de clic
modo.addEventListener('click', () => {
  // Obtener el valor actual de la variable CSS '--fondoDia'
  const fondoActual = getComputedStyle(document.documentElement).getPropertyValue('--fondoDia').trim();

  // Verificar si el color actual es blanco (modo día)
  if (fondoActual === "#ffffff") {
    // Cambiar al modo noche
    luna.style="opacity: 1";
    sol.style="opacity: 0";
    document.documentElement.style.setProperty("--fondoDia", "#0f172a");
    document.documentElement.style.setProperty("--detallesDia", "#6366f1");
    document.documentElement.style.setProperty("--detalleSuaveDia", "#000000");
    document.documentElement.style.setProperty("--titulosDia", "#f1f5f9");
    document.documentElement.style.setProperty("--negritaDia", "#e2e8f0");
    document.documentElement.style.setProperty("--btnDia", "#273d71");
    document.documentElement.style.setProperty("--letrasDia", "#94a3b8");
    document.documentElement.style.setProperty("--sombrasDia", "#c6c9ee5b");
    document.documentElement.style.setProperty("--linkDinNoche", "#ffffff");
    document.documentElement.style.setProperty("--fondoDM", "#f6f6f6");
  } else {
    // Cambiar al modo día
    luna.style="opacity: 0";
    sol.style="opacity: 1";
    document.documentElement.style.setProperty("--fondoDia", "#ffffff");
    document.documentElement.style.setProperty("--detallesDia", "#818cf8");
    document.documentElement.style.setProperty("--detalleSuaveDia", "#e0e7ff");
    document.documentElement.style.setProperty("--exepcionalDia", "#13ae66");
    document.documentElement.style.setProperty("--titulosDia", "#35393e");
    document.documentElement.style.setProperty("--negritaDia", "#495263");
    document.documentElement.style.setProperty("--btnDia", "#262930");
    document.documentElement.style.setProperty("--letrasDia", "#646465");
    document.documentElement.style.setProperty("--sombrasDia", "#cdd1fc");
    document.documentElement.style.setProperty("--linkDinNoche", "#0482c5");
    document.documentElement.style.setProperty("--fondoDM", "#0f172a");
  }
});



