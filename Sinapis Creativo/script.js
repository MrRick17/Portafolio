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

document.addEventListener('DOMContentLoaded', () => {
    
    /* ----------------------------------------------------
       1. BASE DE DATOS (Array de Proyectos)
       ---------------------------------------------------- */
    const proyectos = [
        {
            imagen: 'Donde-Adrian.jpg',
            titulo: 'Post Gastronomico',
            descripcion: 'Diseño provocativo para redes enfocado en antojo y conversiones rápidas.'
        },
        {
            imagen: 'El-punto.jpg',
            titulo: 'Post Promocional',
            descripcion: 'Composición dinámica y de alto contraste para destacar ofertas irresistibles.'
        },
        {
            imagen: 'Free-masterclass-(trading).jpg',
            titulo: 'Flyer para Masterclass',
            descripcion: 'Estructura corporativa enfocada en la captación de leads y autoridad en el nicho financiero.'
        },
        {
            imagen: 'GYM.jpg',
            titulo: 'Campaña Fitness',
            descripcion: 'Estética de alto impacto visual y energía para promoción de membresías.'
        },
        {
            imagen: 'New-colletion-(urbano).jpg',
            titulo: 'Lanzamiento Streetwear',
            descripcion: 'Estilo urbano y disruptivo para destacar el "drop" de nuevas colecciones de ropa.'
        },
        {
            imagen: 'Spa-2.jpg',
            titulo: 'Post de Estética y Salud',
            descripcion: 'Diseño limpio, cálido y elegante que transmite confianza, higiene y profesionalismo.'
        }
    ];

    /* ----------------------------------------------------
       2. LÓGICA DEL VISOR ÚNICO
       ---------------------------------------------------- */
    const visor = document.getElementById('proyecto-activo');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');

    // Índice para saber qué proyecto estamos mostrando
    let proyectoActual = 0;

    // Función que inyecta el HTML del proyecto según el índice
    const renderizarProyecto = (indice) => {
        if (!visor) return; // Por si acaso no existe el contenedor
        
        const proyecto = proyectos[indice];
        
        visor.innerHTML = `
            <div class="portfolio__item-unico">
                <img src="${proyecto.imagen}" alt="${proyecto.titulo}" class="portfolio__img">
                <div class="portfolio__info">
                    <h3>${proyecto.titulo}</h3>
                    <p>${proyecto.descripcion}</p>
                    
                </div>
            </div>
        `;
    };

    // Renderizamos el primer proyecto al cargar la página
    renderizarProyecto(proyectoActual);

    /* ----------------------------------------------------
       3. EVENTOS DE LAS FLECHAS
       ---------------------------------------------------- */
    if (btnNext && btnPrev) {
        
        btnNext.addEventListener('click', () => {
            // Sumamos 1. Si llegamos al final, volvemos al 0 (inicio)
            proyectoActual++;
            if (proyectoActual >= proyectos.length) {
                proyectoActual = 0;
            }
            renderizarProyecto(proyectoActual);
        });

        btnPrev.addEventListener('click', () => {
            // Restamos 1. Si estamos en el 0, pasamos al último
            proyectoActual--;
            if (proyectoActual < 0) {
                proyectoActual = proyectos.length - 1;
            }
            renderizarProyecto(proyectoActual);
        });
    }

});