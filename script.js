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
  