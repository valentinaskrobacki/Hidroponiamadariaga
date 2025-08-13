// --------------- Ocultar - Menú ---------------

const navLinks = document.querySelectorAll('.navbar a');
const checkbox = document.getElementById('check');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    checkbox.checked = false;
  });
});

// --------------- Portada ---------------

// Cambiar fondo dinámicamente
const portada = document.querySelector('.portada');

// Lista de imágenes
const imagenes = [
  'imagenes/portada.png',
  'imagenes/portada1.png',
  'imagenes/portada2.png'
];

let indice = 0;

function cambiarFondo() {
  portada.style.backgroundImage = `url(${imagenes[indice]})`;
  indice = (indice + 1) % imagenes.length;
}

// Cambia cada 6 segundos
setInterval(cambiarFondo, 6000);

// Cargar la primera imagen al iniciar
window.addEventListener('DOMContentLoaded', cambiarFondo);

// --------------- Mostrar / Ocultar contenido sobrenos ---------------

const boton = document.getElementById('boton-leer-mas');
const contenido = document.getElementById('contenido-oculto');

boton.addEventListener('click', () => {
  contenido.classList.toggle('mostrar');
  boton.textContent = contenido.classList.contains('mostrar') ? 'Leer menos' : 'Leer más';
});


// --------------- Noticias - Carrusel ---------------

document.addEventListener("DOMContentLoaded", () => {
  const carrusel = document.querySelector('.carrusel');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

  next.addEventListener('click', () => {
    carrusel.scrollBy({ left: carrusel.clientWidth, behavior: 'smooth' });
  });

  prev.addEventListener('click', () => {
    carrusel.scrollBy({ left: -carrusel.clientWidth, behavior: 'smooth' });
  });
});