// --------------- Ocultar - Menú ---------------

const navLinks = document.querySelectorAll('.navbar a');
const checkbox = document.getElementById('check');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    checkbox.checked = false;
  });
});

// --------------- Portada ---------------

// Elementos
const portada = document.querySelector('.portada');
const titulo = document.getElementById('portada-titulo');
const texto = document.getElementById('portada-texto');

// Lista de slides (imagen + titulo + texto)
const slides = [
  {
    imagen: 'imagenes/portada.png',
    titulo: 'Hidroponía Madariaga',
    texto: 'Tecnología en sabores tradicionales'
  },
  {
    imagen: 'imagenes/portada1.png',
    titulo: 'Titulo 2',
    texto: 'Texto 2'
  },
  {
    imagen: 'imagenes/portada2.png',
    titulo: 'Titulo 3',
    texto: 'Texto 3'
  }
];

let indice = 0;

function cambiarFondo() {
  // Cambiar imagen
  portada.style.backgroundImage = `url(${slides[indice].imagen})`;

  // Reiniciar animación
  titulo.classList.remove('fade-in-up');
  texto.classList.remove('fade-in-up', 'delay');

  // Forzar reflow
  void titulo.offsetWidth;
  void texto.offsetWidth;

  // Cambiar texto
  titulo.textContent = slides[indice].titulo;
  texto.textContent = slides[indice].texto;

  // Reagregar clases para animación
  titulo.classList.add('fade-in-up');
  texto.classList.add('fade-in-up', 'delay');

  // Avanzar al siguiente
  indice = (indice + 1) % slides.length;
}

// Cambia cada 6 segundos
setInterval(cambiarFondo, 6000);

// Cargar la primera al iniciar
window.addEventListener('DOMContentLoaded', cambiarFondo);


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