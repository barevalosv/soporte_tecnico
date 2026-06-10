// 1. Selección de elementos del DOM
const inputEquipo = document.getElementById('equipo');
const inputProblema = document.getElementById('problema');
const btnAbrir = document.getElementById('btnAbrir');
const listaTickets = document.getElementById('listaTickets');
const contadorElemento = document.getElementById('contador');
const mensajeError = document.getElementById('mensajeError');

// 2. Estado de la aplicación
let totalTickets = 0;

// 3. Función principal para añadir el ticket
function registrarTicket() {
    const equipo = inputEquipo.value.trim();
    const problema = inputProblema.value.trim();

    // VALIDACIÓN MODIFICADA: En lugar de alert, mostramos el div
    if (equipo === "" || problema === "") {
        mensajeError.style.display = "block"; // Muestra el error
        return; 
    }

    // Si pasa la validación, ocultamos el error por si estuviera visible
    mensajeError.style.display = "none";

    // ... (El resto de tu código para sumar contador y crear el li se queda igual)

    // EL CEREBRO: Sumamos +1 al contador y actualizamos la pantalla
    totalTickets++;
    contadorElemento.textContent = totalTickets;

    // LA LÓGICA: Creamos el nuevo elemento de lista (li)
    const nuevoTicket = document.createElement('li');
    nuevoTicket.innerHTML = `
        <span><strong>Equipo:</strong> ${equipo}</span>
        <span><strong>Problema:</strong> ${problema}</span>
    `;

    // Inyectamos el ticket en la lista (los más nuevos aparecerán abajo)
    listaTickets.appendChild(nuevoTicket);

    // LIMPIEZA: Reseteamos los inputs para el siguiente reporte
    inputEquipo.value = "";
    inputProblema.value = "";
    
    // Devolvemos el foco al primer input por comodidad del usuario
    inputEquipo.focus();
}

// 4. Eventos
btnAbrir.addEventListener('click', registrarTicket);

// Extra: Permitir enviar también al pulsar 'Enter' en el teclado
inputProblema.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        registrarTicket();
    }
});