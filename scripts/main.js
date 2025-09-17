// --------------- Ocultar - Header ---------------

let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrollea hacia abajo → esconder header
    header.style.transform = "translateY(-100%)";
  } else {
    // Scrollea hacia arriba → mostrar header
    header.style.transform = "translateY(0)";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evita valores negativos
});


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
    imagen: 'imagenes/portada1.jpg',
    titulo: 'Hidroponía Madariaga',
    texto: 'Buenos Aires, Argentina'
  },
  {
    imagen: 'imagenes/portada2.jpg',
    texto: 'Alimentos sanos, frescos y nutritivos'
  },
  {
    imagen: 'imagenes/portada3.jpg',
    texto: 'Desde la semilla a la mesa'
  },
  {
    imagen: 'imagenes/portada4.png',
    texto: 'Tecnología aplicada, sistema NFT'
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