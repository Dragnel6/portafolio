(function () {
    const techIcons = {
        Python: "<i class='bx bxl-python'></i>",
        React: "<i class='bx bxl-react'></i>",
        HTML: "<i class='bx bxl-html5'></i>",
        CSS: "<i class='bx bxl-css3'></i>",
        JavaScript: "<i class='bx bxl-javascript'></i>",
        Firebase: "<i class='bx bxl-firebase'></i>",
        Flask: "<i class='bx bx-code-curly'></i>",
        PHP: "<i class='bx bxl-php'></i>",
        Bootstrap: "<i class='bx bxl-bootstrap'></i>",
        Laravel: "<i class='bx bx-layer'></i>",
        Laragon: "<i class='bx bx-server'></i>",
        SQLite: "<i class='bx bx-data'></i>",
        MySQL: "<i class='bx bx-data'></i>",
        Cloudinary: "<i class='bx bx-cloud'></i>",
        'REST API': "<i class='bx bx-transfer-alt'></i>"
    };

    const projectData = {
        innovation: {
            titleKey: 'project-innovation-title',
            title: 'Innovation 3D',
            logoSrc: '/image/innovation3d.png',
            descKey: 'project-innovation-desc',
            desc: 'Es una app web desarrollada con el objetivo de brindar servicios de impresión 3D como creación de prototipos, pequeñas y medianas tiradas de piezas con la función de una calculadora hecha para moldear tu diseño como gustes. Incluye herramientas avanzadas de personalización y estimación de costos.',
            stack: ['Python', 'Flask', 'MySQL', 'HTML', 'CSS'],
            shots: [
                { src: '/documentos/innovation 3d/inicio1.png', captionKey: 'project-innovation-shot-home', caption: 'Inicio de la pagina' },
                { src: '/documentos/innovation 3d/inicio2.png', captionKey: 'project-innovation-shot-home', caption: 'Inicio de la pagina' },
                { src: '/documentos/innovation 3d/inicio4.png', captionKey: 'project-innovation-shot-home', caption: 'Inicio de la pagina' },
                { src: '/documentos/innovation 3d/inicio3.png', captionKey: 'project-innovation-shot-home', caption: 'Inicio de la pagina' },
                { src: '/documentos/innovation 3d/modelos3d.png', captionKey: 'project-innovation-shot-models', caption: 'Sesion de modelos 3D' },
                { src: '/documentos/innovation 3d/modelo.png', captionKey: 'project-innovation-shot-models', caption: 'Sesion de modelos 3D' },
                { src: '/documentos/innovation 3d/material1.png', captionKey: 'project-innovation-shot-materials', caption: 'Sesion de materiales' },
                { src: '/documentos/innovation 3d/material2.png', captionKey: 'project-innovation-shot-materials', caption: 'Sesion de materiales' },
                { src: '/documentos/innovation 3d/material3.png', captionKey: 'project-innovation-shot-materials', caption: 'Sesion de materiales' },
                { src: '/documentos/innovation 3d/contacto1.png', captionKey: 'project-innovation-shot-contact', caption: 'Apartado de contactos' },
                { src: '/documentos/innovation 3d/contacto2.png', captionKey: 'project-innovation-shot-contact', caption: 'Apartado de contactos' },
                { src: '/documentos/innovation 3d/calculadora.png', captionKey: 'project-innovation-shot-calculator', caption: 'Apartado de calcular precio de un diseño 3d' },
                { src: '/documentos/innovation 3d/adminsitio.png', captionKey: 'project-innovation-shot-admin', caption: 'Apartado de administracion de los modelos 3d' },
                { src: '/documentos/innovation 3d/archivos3d.png', captionKey: 'project-innovation-shot-admin', caption: 'Apartado de administracion de los modelos 3d' },
                { src: '/documentos/innovation 3d/loginadmin.png', captionKey: 'project-innovation-shot-login', caption: 'Login de administrador' }
            ]
        },
        localwonder: {
            titleKey: 'project-localwonder-title',
            title: 'Local Wonder SV',
            logoSrc: '/image/localwonder.png',
            descKey: 'project-localwonder-desc',
            desc: 'Una app web desarrollada para salones de belleza donde puedan brindar sus productos y servicios de una manera fácil en donde los clientes ver todo lo que ofrece un salón.',
            stack: ['PHP', 'MySQL', 'HTML', 'Bootstrap', 'CSS'],
            shots: [
                { src: '/documentos/localwonder/Inicio-salones.png', captionKey: 'project-localwonder-shot-salons', caption: 'Inicio de catalogo de salones' },
                { src: '/documentos/localwonder/Perfil-salon.png', captionKey: 'project-localwonder-shot-profile', caption: 'Perfil de un salon' },
                { src: '/documentos/localwonder/Perfil-salon1.png', captionKey: 'project-localwonder-shot-profile', caption: 'Perfil de un salon' },
                { src: '/documentos/localwonder/Servicio-salon.png', captionKey: 'project-localwonder-shot-services', caption: 'Sesion de servicios del salon' },
                { src: '/documentos/localwonder/productos-salon.png', captionKey: 'project-localwonder-shot-salon-products', caption: 'Sesion de productos que ofrece el salon' },
                { src: '/documentos/localwonder/Inicio-productos.png', captionKey: 'project-localwonder-shot-products', caption: 'Inicio de catalogo de productos de todos los salones' },
                { src: '/documentos/localwonder/detalle-producto.png', captionKey: 'project-localwonder-shot-product-detail', caption: 'Detalles de un producto' },
                { src: '/documentos/localwonder/Inicio-cursos.png', captionKey: 'project-localwonder-shot-courses', caption: 'Catalogo de cursos de belleza' },
                { src: '/documentos/localwonder/login-salon.png', captionKey: 'project-localwonder-shot-login-salon', caption: 'Login de salon' },
                { src: '/documentos/localwonder/login-usuario.png', captionKey: 'project-localwonder-shot-login-user', caption: 'Login de usuario' },
                { src: '/documentos/localwonder/bienvenido-salon.png', captionKey: 'project-localwonder-shot-welcome', caption: 'Notificacion de bienvenida al iniciar sesion de un salon' },
                { src: '/documentos/localwonder/Citas-reservadas.png', captionKey: 'project-localwonder-shot-appointments', caption: 'Tabla de citas reservadas de un salon' },
                { src: '/documentos/localwonder/agregar-citas.png', captionKey: 'project-localwonder-shot-manage-services', caption: 'Administracion de servicios de un salon' },
                { src: '/documentos/localwonder/administrar-productos.png', captionKey: 'project-localwonder-shot-manage-products', caption: 'Administracion de productos de un salon' },
                { src: '/documentos/localwonder/chat.png', captionKey: 'project-localwonder-shot-chat', caption: 'Sesion de chat para que los usarios se comuniquen con los salones' }
            ]
        },
        arca: {
            titleKey: 'project-arca-title',
            title: 'Arca Acces',
            logoSrc: '/image/arcaasesorios.png',
            descKey: 'project-arca-desc',
            desc: 'Es una tienda en línea con el objetivo de ofrecer una amplia variedad de productos. Se especializa en artículos para celulares, destacándose en este ámbito. Que brinda una experiencia de compra intuitiva y sencilla para todos los clientes.',
            stack: ['PHP', 'Laravel', 'MySQL', 'HTML', 'Bootstrap', 'CSS'],
            shots: [
                { src: '/documentos/Arca access/Inicio-productos.png', captionKey: 'project-arca-shot-catalog', caption: 'Inicio de catalogos de productos' },
                { src: '/documentos/Arca access/inicio-protectores.png', captionKey: 'project-arca-shot-catalog', caption: 'Inicio de catalogos de productos' },
                { src: '/documentos/Arca access/Carrito.png', captionKey: 'project-arca-shot-cart', caption: 'Opcion de carrito' },
                { src: '/documentos/Arca access/login.png', captionKey: 'project-arca-shot-login', caption: 'Inicio de sesion' },
                { src: '/documentos/Arca access/opcion de paga1.png', captionKey: 'project-arca-shot-payment', caption: 'Opciones de paga' },
                { src: '/documentos/Arca access/pagadito.png', captionKey: 'project-arca-shot-payment', caption: 'Opciones de paga' },
                { src: '/documentos/Arca access/contra entrega.png', captionKey: 'project-arca-shot-payment', caption: 'Opciones de paga' },
                { src: '/documentos/Arca access/Administrador.png', captionKey: 'project-arca-shot-admin', caption: 'Apartado del administrador de productos' },
                { src: '/documentos/Arca access/listado de pedidos.png', captionKey: 'project-arca-shot-orders', caption: 'Listado de compras de los usarios' }
            ]
        },
        legal: {
            titleKey: 'project-legal-title',
            title: 'Legal Chronocli',
            logoSrc: '/image/legal.png',
            descKey: 'project-legal-desc',
            desc: 'La aplicación web diseñada para ofrecerte una gestión integral de documentos legales y programación de audiencias, entre muchos otros servicios. y garantizar la máxima seguridad en todos los procesos, asegurando la confidencialidad y protección de tu información.',
            stack: ['PHP', 'Laravel', 'Laragon', 'HTML', 'CSS', 'Bootstrap'],
            shots: [
                { src: '/documentos/Legal_chronocli/captura1.png', captionKey: 'project-legal-shot-login', caption: 'Inicio de sesion' },
                { src: '/documentos/Legal_chronocli/captura2.png', captionKey: 'project-legal-shot-login', caption: 'Inicio de sesion' },
                { src: '/documentos/Legal_chronocli/captura3.png', captionKey: 'project-legal-shot-calendar', caption: 'Calendario interactivo' },
                { src: '/documentos/Legal_chronocli/captura4.png', captionKey: 'project-legal-shot-hearing', caption: 'Audiencia programada' },
                { src: '/documentos/Legal_chronocli/captura5.png', captionKey: 'project-legal-shot-task', caption: 'Tarea programada' },
                { src: '/documentos/Legal_chronocli/captura6.png', captionKey: 'project-legal-shot-docs', caption: 'Gestion de documentos' },
                { src: '/documentos/Legal_chronocli/captura7.png', captionKey: 'project-legal-shot-sentences', caption: 'Gestion de documentos de sentencias' },
                { src: '/documentos/Legal_chronocli/captura8.png', captionKey: 'project-legal-shot-sentence-form', caption: 'Formulario de sentencias' },
                { src: '/documentos/Legal_chronocli/captura9.png', captionKey: 'project-legal-shot-hearings', caption: 'Sesion de Programacion de audiencias' },
                { src: '/documentos/Legal_chronocli/captura10.png', captionKey: 'project-legal-shot-hearing-form', caption: 'Formulario de audiencias' },
                { src: '/documentos/Legal_chronocli/captura11.png', captionKey: 'project-legal-shot-tasks', caption: 'Sesion de tareas' },
                { src: '/documentos/Legal_chronocli/captura12.png', captionKey: 'project-legal-shot-task-form', caption: 'Formulario de tareas' }
            ]
        },
        bibliotech: {
            titleKey: 'project-bibliotech-title',
            title: 'Bibliotech',
            logoSrc: '/image/bibliotech.png',
            descKey: 'project-bibliotech-desc',
            desc: 'Bibliotech es un sistema completo para gestionar los recursos de tu biblioteca. Permite administrar libros, autores, categorías y realizar búsquedas avanzadas de manera eficiente y organizada.',
            stack: ['PHP', 'MySQL', 'CSS', 'JavaScript'],
            shots: [
                { src: '/documentos/Bibliotech/captura1.png', captionKey: 'project-bibliotech-shot-1', caption: 'Inicio y acciones rápidas' },
                { src: '/documentos/Bibliotech/captura2.png', captionKey: 'project-bibliotech-shot-2', caption: 'Estadísticas y características del sistema' },
                { src: '/documentos/Bibliotech/captura3.png', captionKey: 'project-bibliotech-shot-3', caption: 'Gestión de libros' },
                { src: '/documentos/Bibliotech/captura4.png', captionKey: 'project-bibliotech-shot-4', caption: 'Formulario para agregar un libro' },
                { src: '/documentos/Bibliotech/captura4.1.png', captionKey: 'project-bibliotech-shot-4-1', caption: 'Autores, categorías y descripción del libro' },
                { src: '/documentos/Bibliotech/captura5.png', captionKey: 'project-bibliotech-shot-5', caption: 'Búsqueda avanzada de libros' },
                { src: '/documentos/Bibliotech/captura6.png', captionKey: 'project-bibliotech-shot-6', caption: 'Gestión de autores' },
                { src: '/documentos/Bibliotech/captura7.png', captionKey: 'project-bibliotech-shot-7', caption: 'Gestión de categorías' },
                { src: '/documentos/Bibliotech/captura8.png', captionKey: 'project-bibliotech-shot-8', caption: 'Catálogo de todos los libros' }
            ]
        },
        hitspoke: {
            titleKey: 'project-hitspoke-title',
            title: 'HitsPoke',
            logoSrc: '/image/nuevologo.png',
            descKey: 'project-hitspoke-desc',
            desc: 'HitsPoke es una tienda en linea dedicada a los fanáticos de Pokémon, que ofrece productos exclusivos relacionados con el universo Pokémon. Desde figuras de acción hasta cartas, HitsPoke es el destino ideal para los coleccionistas y entusiastas de Pokémon.',
            stack: ['React', 'JavaScript', 'Firebase', 'Cloudinary', 'CSS', 'REST API'],
            shots: [
                { src: '/documentos/HitsPoket/foto1-login.png', captionKey: 'project-hitspoke-shot-login', caption: 'Login' },
                { src: '/documentos/HitsPoket/foto3-main1.png', captionKey: 'project-hitspoke-shot-catalog', caption: 'Catalogo principal' },
                { src: '/documentos/HitsPoket/foto4-main2.png', captionKey: 'project-hitspoke-shot-catalog', caption: 'Catalogo principal' },
                { src: '/documentos/HitsPoket/foto5-main3.png', captionKey: 'project-hitspoke-shot-catalog', caption: 'Catalogo principal' },
                { src: '/documentos/HitsPoket/foto6-infoProduct.png', captionKey: 'project-hitspoke-shot-product', caption: 'Detalle de producto' },
                { src: '/documentos/HitsPoket/foto7-infocomment.png', captionKey: 'project-hitspoke-shot-comments', caption: 'Comentarios del producto' },
                { src: '/documentos/HitsPoket/foto8-comentario.png', captionKey: 'project-hitspoke-shot-comments', caption: 'Comentarios del producto' },
                { src: '/documentos/HitsPoket/foto9-admin.png', captionKey: 'project-hitspoke-shot-admin', caption: 'Administracion' },
                { src: '/documentos/HitsPoket/foto10-admin2.png', captionKey: 'project-hitspoke-shot-admin', caption: 'Administracion' }
            ]
        },
        altrato: {
            titleKey: 'project-altrato-title',
            title: '',
            logoSrc: '',
            descKey: 'project-altrato-desc',
            desc: '',
            stack: [],
            shots: []
        },
        servicell: {
            titleKey: 'project-servicell-title',
            title: 'Servicell',
            logoSrc: '/image/servicell.png',
            descKey: 'project-servicell-desc',
            desc: 'La aplicación web está diseñada para gestionar el inventario de una pequeña empresa de reparación de celulares y venta de accesorios, la app facilita la gestión de inventarios y el seguimiento financiero, permitiendo que el dueño del negocio tenga una visión clara de su situación económica.',
            stack: ['Python', 'Flask', 'SQLite', 'Cloudinary', 'HTML', 'CSS', 'JavaScript'],
            shots: [
                { src: '/documentos/Servicell/captura1.png', captionKey: 'project-servicell-shot-1', caption: 'Inicio de sesión' },
                { src: '/documentos/Servicell/captura2.png', captionKey: 'project-servicell-shot-2', caption: 'Panel de estadísticas' },
                { src: '/documentos/Servicell/captura2.1.png', captionKey: 'project-servicell-shot-2-1', caption: 'Gráficas de reparaciones y garantías' },
                { src: '/documentos/Servicell/captura3.png', captionKey: 'project-servicell-shot-3', caption: 'Categorías del inventario' },
                { src: '/documentos/Servicell/captura4.png', captionKey: 'project-servicell-shot-4', caption: 'Centro de reparaciones' },
                { src: '/documentos/Servicell/captura5.png', captionKey: 'project-servicell-shot-5', caption: 'Inventario por categoría' },
                { src: '/documentos/Servicell/captura5.1.png', captionKey: 'project-servicell-shot-5-1', caption: 'Confirmación de venta' },
                { src: '/documentos/Servicell/captura6.png', captionKey: 'project-servicell-shot-6', caption: 'Objetos olvidados' },
                { src: '/documentos/Servicell/captura7.png', captionKey: 'project-servicell-shot-7', caption: 'Inventario de productos' },
                { src: '/documentos/Servicell/captura8.png', captionKey: 'project-servicell-shot-8', caption: 'Formulario de detalles del producto' },
                { src: '/documentos/Servicell/captura9.png', captionKey: 'project-servicell-shot-9', caption: 'Panel de garantías' },
                { src: '/documentos/Servicell/captura10.png', captionKey: 'project-servicell-shot-10', caption: 'Formulario para agregar una garantía' }
            ]
        }
    };

    const modal = document.getElementById('project-modal');
    const track = document.getElementById('carousel-track');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');
    const closeBtn = modal ? modal.querySelector('.project-modal-close') : null;
    let lastOpenedProjectId = null;
    let currentSlideIndex = 0;

    function applyModalDictionary() {
        if (!window.portfolioI18n) {
            return;
        }

        window.portfolioI18n.applyDictionary(window.portfolioI18n.getDictionary());
    }

    function getSlides() {
        return track ? track.querySelectorAll('.carousel-slide') : [];
    }

    function updateSlideView() {
        const slides = getSlides();
        const lastIndex = Math.max(slides.length - 1, 0);

        if (currentSlideIndex < 0) {
            currentSlideIndex = 0;
        }
        if (currentSlideIndex > lastIndex) {
            currentSlideIndex = lastIndex;
        }

        slides.forEach(function (slide, index) {
            slide.classList.toggle('active', index === currentSlideIndex);
        });

        if (prevBtn) {
            prevBtn.disabled = currentSlideIndex <= 0;
        }
        if (nextBtn) {
            nextBtn.disabled = currentSlideIndex >= lastIndex;
        }
    }

    function createIntroSlide(project) {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide carousel-slide-intro';

        const grid = document.createElement('div');
        grid.className = 'project-intro-grid';

        if (project.logoSrc) {
            const logo = document.createElement('img');
            logo.className = 'project-modal-logo';
            logo.src = encodeURI(project.logoSrc);
            logo.alt = project.title || '';
            grid.appendChild(logo);
        }

        const copy = document.createElement('div');
        copy.className = 'project-intro-copy';

        const title = document.createElement('h2');
        title.id = 'project-modal-title';
        title.setAttribute('data-i18n', project.titleKey);
        title.textContent = project.title || '';
        copy.appendChild(title);

        const desc = document.createElement('p');
        desc.setAttribute('data-i18n', project.descKey);
        desc.textContent = project.desc || '';
        copy.appendChild(desc);

        const stackContainer = document.createElement('div');
        stackContainer.className = 'tech-stack-container';
        (project.stack || []).forEach(function (techName) {
            const icon = techIcons[techName] || "<i class='bx bx-code-alt'></i>";
            const pill = document.createElement('span');
            pill.className = 'tech-pill';
            pill.innerHTML = icon + ' ' + techName;
            stackContainer.appendChild(pill);
        });
        copy.appendChild(stackContainer);

        grid.appendChild(copy);
        slide.appendChild(grid);
        return slide;
    }

    function createShotSlide(shot, project) {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide carousel-slide-shot';

        const img = document.createElement('img');
        img.src = encodeURI(shot.src);
        img.alt = shot.caption || project.title || '';

        const caption = document.createElement('p');
        caption.className = 'slide-caption';
        caption.setAttribute('data-i18n', shot.captionKey);
        caption.textContent = shot.caption || '';

        slide.appendChild(img);
        slide.appendChild(caption);
        return slide;
    }

    function openProjectModal(projectId, options) {
        const project = projectData[projectId];
        const keepSlide = options && options.keepSlide;

        if (!project || !modal || !track) {
            return;
        }

        lastOpenedProjectId = projectId;
        if (!keepSlide) {
            currentSlideIndex = 0;
        }

        track.innerHTML = '';
        track.appendChild(createIntroSlide(project));
        (project.shots || []).forEach(function (shot) {
            track.appendChild(createShotSlide(shot, project));
        });

        modal.classList.remove('hidden');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('project-modal-open');

        applyModalDictionary();
        updateSlideView();
    }

    function closeProjectModal() {
        if (!modal) {
            return;
        }

        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('project-modal-open');
        lastOpenedProjectId = null;
        currentSlideIndex = 0;
    }

    function goToSlide(delta) {
        const slides = getSlides();
        const nextIndex = currentSlideIndex + delta;

        if (nextIndex < 0 || nextIndex >= slides.length) {
            return;
        }

        currentSlideIndex = nextIndex;
        updateSlideView();
    }

    function init() {
        if (!modal) {
            return;
        }

        document.querySelectorAll('[data-project]').forEach(function (button) {
            button.addEventListener('click', function () {
                openProjectModal(button.getAttribute('data-project'));
            });
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', closeProjectModal);
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', function () {
                goToSlide(-1);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', function () {
                goToSlide(1);
            });
        }

        modal.addEventListener('click', function (event) {
            if (event.target === modal) {
                closeProjectModal();
            }
        });

        document.addEventListener('keydown', function (event) {
            if (modal.classList.contains('hidden')) {
                return;
            }

            if (event.key === 'Escape') {
                closeProjectModal();
            } else if (event.key === 'ArrowLeft') {
                goToSlide(-1);
            } else if (event.key === 'ArrowRight') {
                goToSlide(1);
            }
        });

        document.addEventListener('portfolio:langchange', function () {
            if (lastOpenedProjectId && !modal.classList.contains('hidden')) {
                openProjectModal(lastOpenedProjectId, { keepSlide: true });
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
