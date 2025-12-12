// 1. Obtener referencias a los elementos HTML
const boton = document.getElementById('miBoton');
const titulo = document.getElementById('titulo');

// 2. Definir la función que se ejecutará al hacer clic
function cambiarColor() {
    // Si el color actual es negro/gris, lo cambia a azul (o viceversa)
    if (titulo.style.color === 'red') {
        titulo.style.color = '#333'; // Color inicial
        titulo.textContent = 'Hola, Mundo Simple';
    } else {
        titulo.style.color = 'red'; // Nuevo color
        titulo.textContent = '¡El Color ha Cambiado!';
    }
}

// 3. Asignar la función al evento 'click' del botón
boton.addEventListener('click', cambiarColor);

// También podríamos añadir un mensaje a la consola del navegador para verificar que funciona
console.log('El script.js está cargado y listo.');