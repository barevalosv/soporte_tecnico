// 1. Selección de elementos del DOM
const inputEquipo = document.getElementById('equipo');
const inputProblema = document.getElementById('problema');
const btnAbrir = document.getElementById('btnAbrir');
const listaTickets = document.getElementById('listaTickets');
const contadorElemento = document.getElementById('contador');

// 2. Estado de la aplicación
let totalTickets = 0;

// 3. Función principal para añadir el ticket
function registrarTicket() {
    // Capturamos los valores eliminando espacios en blanco innecesarios
    const equipo = inputEquipo.value.trim();
    const problema = inputProblema.value.trim();

    // VALIDACIÓN: Si alguno está vacío, saltamos alert y frenamos la ejecución
    if (equipo === "" || problema === "") {
        alert("⚠️ Por favor, rellena tanto el nombre del equipo como el problema.");
        return; 
    }

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