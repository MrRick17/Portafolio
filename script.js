const menu = document.querySelector(".nav__menu");
const boton = document.querySelector(".nav__boton");
const links = document.querySelectorAll(".nav__link");

boton.addEventListener("click", () => {
    menu.classList.toggle("nav__menu--activo");
})

links.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("nav__menu--activo");
    });
});


// 1. BASE DE DATOS DE PROYECTOS (Tus 4 joyas)
const proyectos = [

    {
        titulo: "Hub Urbano Digital",
        descripcion: "Landing page diseñada con un enfoque Dark UI para un centro de innovación tecnológica. Utiliza variables nativas de CSS para una paleta de alto contraste y Flexbox para una estructura fluida y adaptativa.",
        imagen: "pagina-urbano.png", 
        tags: ["HTML5", "CSS3 Variables", "Flexbox", "Dark Theme"],
        demoUrl: "https://mrrick17.github.io/Portafolio/Hub-Urbano-Digital",
        codigoUrl: "https://github.com/mrrick17/Portafolio/tree/main/Hub-Urbano-Digital"
    },
    
    {
        titulo: "Cecoarca — Web Corporativa",
        descripcion: "Landing page corporativa desarrollada con un enfoque Mobile First. Destaca por su diseño limpio, navegación adaptativa y la implementación avanzada de CSS Container Queries para la estructura del formulario.",
        imagen: "pagina-cecoarca.png", 
        tags: ["HTML5", "CSS3 Moderno", "Container Queries", "Responsive Design"],
        demoUrl: "https://mrrick17.github.io/Portafolio/Cecoarca",
        codigoUrl: "https://github.com/mrrick17/Portafolio/tree/main/Cecoarca"
    },
    
];

// 2. ELEMENTOS DEL DOM
const trackProyectos = document.getElementById('track-proyectos');
let indiceActual = 0;

// 3. FUNCIÓN PARA DIBUJAR LOS PROYECTOS
function cargarProyectos() {
    if (!trackProyectos) return;

    trackProyectos.innerHTML = ''; // Limpia todo para que no se dupliquen

    proyectos.forEach(proyecto => {
        // Generar etiquetas
        const tagsHTML = proyecto.tags
            .map(tag => `<span class="project-card__tag">${tag}</span>`)
            .join('');

        // Crear la tarjeta con las flechas adentro
        const tarjetaHTML = `
            <article class="project-card">
                
                <div class="project-card__info">
                    <div class="project-card__tags">${tagsHTML}</div>
                    <h3 class="project-card__name">${proyecto.titulo}</h3>
                    <p class="project-card__desc">${proyecto.descripcion}</p>
                    <div class="project-card__links">
                        <a href="${proyecto.demoUrl}" target="_blank" rel="noopener" class="project-card__link project-card__link--primary">Ver Proyecto</a>
                        <a href="${proyecto.codigoUrl}" target="_blank" rel="noopener" class="project-card__link">Código</a>
                    </div>
                </div>

                <div class="project-card__visual">
                    <div class="project-card__img-container">
                        <img src="${proyecto.imagen}" alt="${proyecto.titulo}" class="project-card__img">
                    </div>
                    
                    <div class="portfolio__navigation">
                        <button class="portfolio__arrow portfolio__arrow--left" aria-label="Anterior">&#10094;</button>
                        <button class="portfolio__arrow portfolio__arrow--right" aria-label="Siguiente">&#10095;</button>
                    </div>
                </div>

            </article>
        `;
        trackProyectos.innerHTML += tarjetaHTML;
    });
}


function moverCarrusel() {
    if (!trackProyectos) return;
    const desplazamiento = -indiceActual * 100;
    trackProyectos.style.transform = `translateX(${desplazamiento}%)`;
}


document.addEventListener('click', (e) => {
    
    // Si toca CUALQUIER flecha derecha
    if (e.target.closest('.portfolio__arrow--right')) {
        if (indiceActual < proyectos.length - 1) {
            indiceActual++;
        } else {
            indiceActual = 0;
        }
        moverCarrusel();
    }
    
    
    if (e.target.closest('.portfolio__arrow--left')) {
        if (indiceActual > 0) {
            indiceActual--;
        } else {
            indiceActual = proyectos.length - 1;
        }
        moverCarrusel();
    }
});



document.addEventListener('DOMContentLoaded', cargarProyectos);

// --- EL VIGILANTE DE SCROLL (Intersection Observer) ---
const observadorScroll = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        // Si el elemento entra en la pantalla...
        if (entrada.isIntersecting) {
            entrada.target.classList.add('aparecer');
            
            // Opcional: Descomenta la siguiente línea si quieres que 
            // la animación ocurra SOLO UNA VEZ y no cada vez que subas y bajes.
            // observadorScroll.unobserve(entrada.target);
        }
    });
}, {
    rootMargin: '0px',
    threshold: 0.15 // Se activa cuando al menos el 15% del elemento es visible
});

// Función para activar el vigilante en los elementos estáticos (como el footer o títulos)
function activarAnimaciones() {
    const elementosOcultos = document.querySelectorAll('.fade-in');
    elementosOcultos.forEach(el => observadorScroll.observe(el));
}

// Lo iniciamos al cargar la página
document.addEventListener('DOMContentLoaded', activarAnimaciones);