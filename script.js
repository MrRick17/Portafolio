document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navbar = document.getElementById("navbar");

    // 1. Control del menú desplegable en dispositivos móviles
    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });

        // Ocultar el menú al hacer clic en cualquier enlace de navegación
        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
            });
        });
    }

    // 2. Comportamiento dinámico de la barra al hacer scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // 3. Base de datos de proyectos
    const proyectos = [

        {
            titulo: "My Past Art",
            descripcion: "Sitio web modernizado para la marca My Past Art, con un enfoque en la experiencia del usuario y la presentación de productos de manera atractiva.",
            imagen: "past.png",
            tags: ["Estrategia Digital", "Responsive", "CSS Moderno"],
            demoUrl: "https://my-past-my-art.vercel.app/"
        },
        {
            titulo: "Sinapis - Experiencia Web Interactiva",
            descripcion: "Landing page moderna construida bajo Mobile First. Interfaz altamente visual y fluida, optimizada para tiempos de carga rápidos[cite: 20].",
            imagen: "SINAPIS.png",
            tags: ["HTML5", "CSS3", "JavaScript"],
            demoUrl: "https://mrrick17.github.io/sinapis-creativo/"
        },
        {
            titulo: "KTSU",
            descripcion: "Sitio web modernizado para la marca KTSU, con un enfoque en la experiencia del usuario y la presentación de productos de manera atractiva.",
            imagen: "ktsu.png",
            tags: ["Diseño Web", "UI/UX", "Frontend"],
            demoUrl: "https://ktsu.vercel.app/"
        },
        
        {
            titulo: "The Purple Pig",
            descripcion: "Sitio web modernizado para la marca The Purple Pig, con un enfoque en la experiencia del usuario y la presentación de productos de manera atractiva.",
            imagen: "pig.png",
            tags: ["Institucional", "Arquitectura Web", "UX"],
            demoUrl: "https://the-purple-pig.vercel.app/"
        }
    ];

    // 4. Lógica del Carrusel Premium
    const trackProyectos = document.getElementById('track-proyectos');
    let indiceActual = 0;

    function cargarProyectos() {
        if (!trackProyectos) return;
        trackProyectos.innerHTML = '';

        proyectos.forEach(proyecto => {
            const tagsHTML = proyecto.tags
                .map(tag => `<span>${tag}</span>`)
                .join('');

            const tarjetaHTML = `
                <article class="project-card">
                    <div class="project-img-container">
                        <img src="${proyecto.imagen}" alt="${proyecto.titulo}">
                    </div>
                    <div class="project-info">
                        <div class="project-tags">${tagsHTML}</div>
                        <h3>${proyecto.titulo}</h3>
                        <p>${proyecto.descripcion}</p>
                        <a href="${proyecto.demoUrl}" target="_blank" rel="noopener" class="btn-project">Ver Página en Vivo</a>
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
        if (e.target.closest('.next-btn')) {
            indiceActual = (indiceActual < proyectos.length - 1) ? indiceActual + 1 : 0;
            moverCarrusel();
        }
        if (e.target.closest('.prev-btn')) {
            indiceActual = (indiceActual > 0) ? indiceActual - 1 : proyectos.length - 1;
            moverCarrusel();
        }
    });

    cargarProyectos();
});