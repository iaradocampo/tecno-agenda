//Reviso si el usuario esta logueado
if (!localStorage.getItem('authUser')) {
    window.location.replace('../index.html');
}
//Lista de eventos.
const eventos = [
    { titulo: "Hackeando Estereotipos: Mujeres en Ciberseguridad", ubicacion: "Buenos Aires, Argentina", categoria: "Ciberseguridad", fecha: "2024-12-05", tipo: "Presencial", descripcion: "Un espacio para destacar el talento femenino en la protección de datos y redes.", imagen: "https://i.ibb.co/s1HhMLq/1.png" },
    { titulo: "Inteligencia Artificial para Todos", ubicacion: "Buenos Aires, Argentina", categoria: "Inteligencia Artificial", fecha: "2024-12-07", tipo: "Online", descripcion: "Descubre cómo la IA transforma nuestra vida y cómo sumarte al cambio.", imagen: "https://i.ibb.co/31vxQTk/2.png" },
    { titulo: "Diseño Inclusivo: Tecnología para Todos", ubicacion: "Cordoba, Argentina", categoria: "Diseño", fecha: "2024-12-12", tipo: "Presencial", descripcion: "Aprende a diseñar experiencias accesibles e innovadoras.", imagen: "https://i.ibb.co/6ZWYvJr/3.png" },
    { titulo: "Soft Skills en Tecnología: Más Allá del Código", ubicacion: "Rosario, Argentina", categoria: "Tecnología", fecha: "2024-12-20", tipo: "Presencial", descripcion: "Habilidades interpersonales que impulsan tu carrera en el mundo tecnológico.", imagen: "https://i.ibb.co/tQhVWJ0/4.png" },
    { titulo: "Código Abierto, Mente Abierta", ubicacion: "Mendoza, Argentina", categoria: "Tecnología", fecha: "2025-01-15", tipo: "Online", descripcion: "Explorando el impacto de las comunidades de código abierto.", imagen: "https://i.ibb.co/fDNNJrR/5.png" },
    { titulo: "Hardware Innovador: Construyendo el Futuro", ubicacion: "Mendoza, Argentina", categoria: "Tecnología", fecha: "2024-12-30", tipo: "Presencial", descripcion: "De los microchips a los dispositivos, descubre lo último en tecnología de hardware.", imagen: "https://i.ibb.co/k59Gnwy/6.png" },
    { titulo: "Ciberseguridad en Tiempos de IA", ubicacion: "Buenos Aires, Argentina", categoria: "Ciberseguridad", fecha: "2024-12-10", tipo: "Online", descripcion: "Estrategias para proteger datos en un mundo dominado por la inteligencia artificial.", imagen: "https://i.ibb.co/vQPzNpk/7.png" },
    { titulo: "Women Tech Leaders: Rompiendo Barreras", ubicacion: "Buenos Aires, Argentina", categoria: "Tecnología", fecha: "2025-02-14", tipo: "Presencial", descripcion: "Historias de mujeres líderes que están transformando la tecnología.", imagen: "https://i.ibb.co/9Y29cpd/15.png" },
    { titulo: "Diseño Digital: Creatividad en Acción", ubicacion: "Buenos Aires, Argentina", categoria: "Diseño", fecha: "2025-01-22", tipo: "Online", descripcion: "Herramientas y técnicas para destacar en el mundo del diseño digital.", imagen: "https://i.ibb.co/0tpsNR1/16.png" },
    { titulo: "Habilidades del Futuro: Tecnología y Comunicación", ubicacion: "Tucumán, Argentina", categoria: "Tecnología", fecha: "2025-03-01", tipo: "Presencial", descripcion: "Cómo las soft skills complementan el dominio técnico.", imagen: "https://i.ibb.co/3kyL7Bb/8.png" },
    { titulo: "Código y Diversidad: Construyendo Juntos", ubicacion: "Salta, Argentina", categoria: "Tecnología", fecha: "2025-02-05", tipo: "Online", descripcion: "Taller colaborativo para fomentar la inclusión en el desarrollo de software.", imagen: "https://i.ibb.co/R4CP10T/9.png" },
    { titulo: "Software vs. Hardware: Sinergias Tecnológicas", ubicacion: "Rosario, Argentina", categoria: "Tecnología", fecha: "2025-04-10", tipo: "Presencial", descripcion: "Un análisis de cómo interactúan el software y el hardware en la era moderna.", imagen: "https://i.ibb.co/D77tQjd/10.png" },
    { titulo: "IA Ética: Programando con Responsabilidad", ubicacion: "Formosa, Argentina", categoria: "Inteligencia Artificial", fecha: "2025-01-18", tipo: "Presencial", descripcion: "Reflexionando sobre los dilemas éticos de la inteligencia artificial.", imagen: "https://i.ibb.co/mX8V4Bm/11.png" },
    { titulo: "Diseño y Emoción: Conexiones Humanas", ubicacion: "Tucumán, Argentina", categoria: "Diseño", fecha: "2024-12-01", tipo: "Online", descripcion: "Cómo el diseño puede provocar emociones y cambiar percepciones.", imagen: "https://i.ibb.co/GFJgKNB/12.png" },
    { titulo: "IA Creativa: Explorando Nuevas Fronteras", ubicacion: "Buenos Aires, Argentina", categoria: "Inteligencia Artificial", fecha: "2025-05-05", tipo: "Presencial", descripcion: "Cómo la inteligencia artificial está revolucionando las industrias creativas.", imagen: "https://i.ibb.co/QPqvvBc/13.png" },
    { titulo: "Diseño de Interfaces para Todos", ubicacion: "Cordoba, Argentina", categoria: "Diseño", fecha: "2025-05-05", tipo: "Online", descripcion: "Claves para crear productos digitales accesibles e intuitivos.", imagen: "https://i.ibb.co/tXkzpL7/17.png" },
    { titulo: "Soft Skills para Equipos Tecnológicos", ubicacion: "Rosario, Argentina", categoria: "Tecnología", fecha: "2025-05-05", tipo: "Presencial", descripcion: "Comunicación y liderazgo efectivo en proyectos de desarrollo.", imagen: "https://i.ibb.co/2PDR32k/18.png" },
    { titulo: "Código Inclusivo: Innovando Sin Límites", ubicacion: "Buenos Aires, Argentina", categoria: "Tecnología", fecha: "2025-05-05", tipo: "Online", descripcion: "Estrategias para integrar la accesibilidad en cada línea de código.", imagen: "https://i.ibb.co/MDf1TpM/19.png" },
    { titulo: "Hardware Verde: Tecnología Sostenible", ubicacion: "Mendoza, Argentina", categoria: "Tecnología", fecha: "2025-05-05", tipo: "Presencial", descripcion: "Explorando el impacto ambiental de los dispositivos tecnológicos y sus soluciones.", imagen: "https://i.ibb.co/y8X0prf/14.png" },
];
//Referencias del DOM.
const contenedorEventos = document.querySelector("#contenedor-eventos");
const buscador = document.querySelector("#filtrar-buscador");
const selectCategoria = document.querySelector("#filtrar-categoria");
const selectUbicacion = document.querySelector("#filtrar-ubicacion");
const cerrarSesion = document.querySelector(".cerrar-sesion");
const contenidoOriginalHTML = contenedorEventos.innerHTML;
//Lista de eventos seleccionados.
const misEventos = [];
//FUNCIONES 
//Restaura a vista principal luego de borrar los filtros.
function restaurarContenidoOriginal() {
    contenedorEventos.innerHTML = contenidoOriginalHTML;
}
//Obtiene un numero aleatrio.
function obtenerAleatorio(array) {
    return Math.floor(Math.random() * array.length);
}
//Obtener los 10 eventos aleatorios.
function obtenerTop10Eventos() {
    let eventosAleatorios = [];
    let eventosRestantes = [...eventos];
    for (let i = 0; i < 10; i++) { 
        const indiceAleatorio = obtenerAleatorio(eventosRestantes);
        eventosAleatorios.push(eventosRestantes[indiceAleatorio]); 
        eventosRestantes.splice(indiceAleatorio, 1); 
    } 
    return eventosAleatorios.sort((a, b) => new Date(a.fecha) - new Date(b.fecha)); // Ordenar por fecha
} 
//Filtrar eventos de esta semana.
function filtrarEventosEstaSemana() { 
    const hoy = new Date(); 
    const semanaFutura = new Date(); 
    semanaFutura.setDate(hoy.getDate() + 7); 
    return eventos.filter(evento => {
        const fechaEvento = new Date(evento.fecha);
        return fechaEvento >= hoy && fechaEvento <= semanaFutura; 
    })
    .sort((a, b) => new Date(a.fecha) - new Date(b.fecha)); // Ordenar por fecha
}
//Filtrar eventos de tipo online/presencial.
function filtrarEventosPorTipo(tipo) {
    switch (tipo) {
        case "Online":
            return eventos.filter(evento => evento.tipo === "Online").sort((a, b) => new Date(a.fecha) - new Date(b.fecha)); // Ordenar por fecha;
        case "Presencial":
            return eventos.filter(evento => evento.tipo === "Presencial").sort((a, b) => new Date(a.fecha) - new Date(b.fecha)); // Ordenar por fecha;
    }
}
//Crear las cards con los eventos de forma dinámica.
function mostrarEventos(listaEventos, contenedor) {
    contenedor.innerHTML = ""; // Limpiar contenido previo
    listaEventos.forEach(evento => {
        const card = document.createElement("div");
        const index = eventos.indexOf(evento);
        card.classList.add("col-md-6", "col-lg-4", "col-xl-4", "mb-4");
        card.innerHTML = `
            <div class="card h-100">
                <img src="${evento.imagen}" class="card-img-top" alt="${evento.titulo}">
                <div class="card-body">
                    <h5 class="card-title">${evento.titulo}</h5>
                    <p class="card-text">${evento.tipo} - ${evento.fecha}</p>
                    <p class="card-text">${evento.descripcion}</p>
                    <button class="btn btn-brand ver-mas" data-index="${index}">Ver más</button>
                </div>
            </div>`;
        contenedor.appendChild(card);
    });
}
//Filtro por categoria y ubicacion, buscador.
function filtrarEventosCombinados() {
    const categoria = selectCategoria.value;
    const ubicacion = selectUbicacion.value;
    const query = buscador.value.toLowerCase();  
    //Si no hay filtros seleccionados, restaurar el contenido original.
    if (categoria === "" && ubicacion === "" && query === "") {
        restaurarContenidoOriginal();
        manejarEventos();
        return;
    }
    //Filtro eventos aplicando los filtros combinados.
    const eventosFiltrados = eventos.filter(evento => {
        const coincideCategoria = evento.categoria.toLowerCase().includes(categoria.toLowerCase()) || evento.tipo.toLowerCase().includes(categoria.toLowerCase());
        const coincideUbicacion = evento.ubicacion.toLowerCase().includes(ubicacion.toLowerCase());
        const coincideBusqueda = evento.titulo.toLowerCase().includes(query) ||
            evento.descripcion.toLowerCase().includes(query) ||
            evento.ubicacion.toLowerCase().includes(query) ||
            evento.categoria.toLowerCase().includes(query) ||
            evento.tipo.toLowerCase().includes(query) ||
            evento.fecha.toLowerCase().includes(query);
        //se muestran los eventos que coinciden con al menos uno de los filtros
        return coincideCategoria && coincideUbicacion && coincideBusqueda;
    });
    mostrarEventos(eventosFiltrados, contenedorEventos);
}
//Manejo de eventos.
function manejarEventos() {
    const top10Eventos = obtenerTop10Eventos();
    const eventosEstaSemana = filtrarEventosEstaSemana();
    const eventosOline = filtrarEventosPorTipo("Online");
    const eventosPresenciales = filtrarEventosPorTipo("Presencial");
    mostrarEventos(top10Eventos, document.querySelector("#top-diez .row"));
    mostrarEventos(eventosEstaSemana, document.querySelector("#esta-semana .row"));
    mostrarEventos(eventosOline, document.querySelector("#online .row"));
    mostrarEventos(eventosPresenciales, document.querySelector("#presenciales .row"));
}
//Crear modal con información del evento de forma dinámica.
function mostrarModal(evento) {
    const modulo = document.createElement("div");
    modulo.classList.add("modal", "fade");
    modulo.setAttribute("tabindex", "-1");
    modulo.setAttribute("role", "dialog");
    modulo.innerHTML =
    `<div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title fs-5"><strong>${evento.titulo}</strong></h3>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-0">
                <img src="${evento.imagen}" class="card-img-top" alt="${evento.titulo}">
                <div class="text-center mt-3">
                    <p>${evento.descripcion}</p>
                </div>
            </div>
            <div class="modal-body p-0">
                <div class="p-2 bg-light border"><strong>FECHA:</strong> ${evento.fecha}</div>
                <div class="p-2 bg-light border"><strong>UBICACION:</strong> ${evento.ubicacion}</div>
                <div class="p-2 bg-light border"><strong>CATEGORIA:</strong> ${evento.categoria}</div>
                <div class="p-2 bg-light border"><strong>TIPO:</strong> ${evento.tipo}</div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-brand" onclick='agregarAMisEventos(${JSON.stringify(evento)})'>
                    Agregar a Mis Eventos
                </button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>`;
    document.body.appendChild(modulo);
    const bootstrapModal = new bootstrap.Modal(modulo);
    bootstrapModal.show();
    modulo.addEventListener("hidden.bs.modal", () => {
        modulo.remove();
    });
}
//Agregar un evento a "Mis Eventos"
function agregarAMisEventos(evento) {
    if (!misEventos.some(e => e.titulo === evento.titulo)) {
        misEventos.push(evento);
        Swal.fire({
            title: "¡Evento guardado!",
            icon: "success"
        });
        mostrarMisEventos();
    } else {
        Swal.fire({
            title: "El evento ya se guardo en Mis Eventos.",
            icon: "warning"
        });
    }
}
//Eliminar un evento de "Mis Eventos"
function eliminarDeMisEventos(titulo) {
    const index = misEventos.findIndex(evento => evento.titulo === titulo);
    if (index !== -1) {
        misEventos.splice(index, 1);
        Swal.fire({
            title: "Evento eliminado correctamente.",
            icon: "success"
        });
        mostrarMisEventos();
    }
}
//Crear evento guardado en Mis Eventos de forma dinámica.
function mostrarMisEventos() {
    const contenedorMisEventos = document.querySelector("#lista-eventos");
    contenedorMisEventos.innerHTML = "";
    misEventos.forEach(evento => {
        const item = document.createElement("li");
        item.classList.add("list-group-item", "d-flex", "align-items-start", "mb-5");
        item.innerHTML = `
            <img src="${evento.imagen}" alt="Imagen evento" class="evento-imagen me-3">
            <div>
                <h6>${evento.titulo}</h6>
                <p>${evento.fecha}</p>
                <button class="btn btn-danger btn-sm" style="margin: 0 auto;"
                onclick="eliminarDeMisEventos('${evento.titulo}')">
                    Eliminar
                </button>
            </div>
        `;
        contenedorMisEventos.appendChild(item);
    });
}
//EVENTOS 
document.addEventListener("DOMContentLoaded", manejarEventos);
contenedorEventos.addEventListener("click", (e) => {
    if (e.target.classList.contains("ver-mas")) {
        const index = e.target.getAttribute("data-index");
        mostrarModal(eventos[index]);
    };
})
cerrarSesion.addEventListener("click", () =>{
    localStorage.removeItem('authUser');
    window.location.replace("../index.html");
});
buscador.addEventListener("input", filtrarEventosCombinados);
selectCategoria.addEventListener("change", filtrarEventosCombinados);
selectUbicacion.addEventListener("change", filtrarEventosCombinados);