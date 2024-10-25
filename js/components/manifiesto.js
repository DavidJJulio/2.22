document.addEventListener('DOMContentLoaded', function () {
    const elementos = document.querySelectorAll('[data-scroll]');
  
    const checkVisibility = () => {
      elementos.forEach(elemento => {
        const posicion = elemento.getBoundingClientRect().top;
        const alturaPantalla = window.innerHeight;
  
        if (posicion < alturaPantalla - 100) {
          elemento.classList.add('visible');
        }
      });
    };
  
    // Ejecuta la verificación de visibilidad al cargar la página y al hacer scroll
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
  });