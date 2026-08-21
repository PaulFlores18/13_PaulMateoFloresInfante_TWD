// ---------------------------------------------------
// Selección de elementos del DOM
// ---------------------------------------------------
const btnMensaje = document.getElementById('btnMensaje');
const btnContenido = document.getElementById('btnContenido');
const btnEstilo = document.getElementById('btnEstilo');

const salidaMensaje = document.getElementById('salidaMensaje');
const contenido = document.getElementById('contenido');
const caja = document.getElementById('caja');

// ---------------------------------------------------
// Acción 1: Mostrar un mensaje
// ---------------------------------------------------
btnMensaje.addEventListener('click', () => {
  salidaMensaje.textContent = ' ¡Hola! Este es un mensaje generado con JavaScript.';
});

// ---------------------------------------------------
// Acción 2: Cambiar contenido
// ---------------------------------------------------
btnContenido.addEventListener('click', () => {
  contenido.textContent = 'El contenido de este párrafo fue actualizado dinámicamente ';
});

// ---------------------------------------------------
// Acción 3: Modificar un estilo
// ---------------------------------------------------
let activo = false;
btnEstilo.addEventListener('click', () => {
  activo = !activo;
  if (activo) {
    caja.classList.remove('border-slate-300');
    caja.classList.add('bg-amber-100', 'border-amber-500', 'scale-105');
  } else {
    caja.classList.add('border-slate-300');
    caja.classList.remove('bg-amber-100', 'border-amber-500', 'scale-105');
  }
});