document.addEventListener('DOMContentLoaded', ()=> {

    // === MODO OSCURO ===
    //funcion para el boton de modo claro/oscuro
    const toogle = document.getElementById('toogle');
    const labelToggle = document.getElementById('label_toogle');

    const darkMode = localStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle('dark', darkMode);
    toogle.checked = darkMode;
    labelToggle.innerHTML = darkMode
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
  

    toogle.addEventListener('change', (event)=>{
        const checked = event.target.checked;
        document.body.classList.toggle('dark');
        localStorage.setItem('darkMode', checked);
        labelToggle.innerHTML = checked
            ? '<i class="fa-solid fa-sun"></i>'
            : '<i class="fa-solid fa-moon"></i>';
    });

    // === BOTÓN "VOLVER ARRIBA" ===
    //funcion para el boton hacia arriba
    window.addEventListener('scroll', ()=> {
        const scrollToTopButton = document.getElementById('scrollToTop');
        if(window.scrollY > 200) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    });

    document.getElementById('scrollToTop').addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

    // === OBSERVER DEL HEADER (logo pequeño en navbar) ===
    //Mostrar el logo cuando el header no esté visible:
    const logoNavbar = document.getElementById('logo-navbar');
    const header = document.querySelector('header');

    const headerObserver = new IntersectionObserver(
        function (entries) {
            if(entries[0].isIntersecting) {
                logoNavbar.classList.remove('visible');
                logoNavbar.classList.add('oculto');
            } else {
                logoNavbar.classList.remove('oculto');
                logoNavbar.classList.add('visible');
            }
        },
        {
            threshold: 0,
        }
    );
    if(header) headerObserver.observe(header);

    // === ANIMACIÓN AL MOSTRAR SECCIONES ===
    //carga las secciones con una animacion sutil una sola vez
    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                sectionObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(sec => {
        sectionObserver.observe(sec);
    });

    // === TABLA DE TECNOLOGÍAS ===
    //metodo para llenar dinamicamente la tabla
    const tecnologiasSi = ["HTML", "CSS", "MySQL", "JavaScript", "JAVA", "Kotlin"];
    const tecnologiasNo = ["TypeScript", "React", "Docker", "Node.JS", "Tailwind CSS", "Flutter"];

    const tablaBody = document.getElementById('tabla-habilidades-body');
    let i = 0;

    function agregarFila() {
        if (i < tecnologiasSi.length) {
            const fila = document.createElement('tr');

            const tSi = document.createElement('td');
            tSi.textContent = tecnologiasSi[i];

            const tNo = document.createElement('td');
            tNo.textContent = tecnologiasNo[i];

            tSi.classList.add('celda-hover');
            tNo.classList.add('celda-hover');

            fila.appendChild(tSi);
            fila.appendChild(tNo);
            tablaBody.appendChild(fila);
            i++;
        }
    }

    const intervalo = setInterval(agregarFila, 600);
    setTimeout(() => clearInterval(intervalo), tecnologiasSi.length * 600);

    //=== HOVER PARA LAS IMAGENES DE LAS CARD's ===
    //cambio de imagen al pasar el mouse
    document.querySelectorAll('.card-peliculas img').forEach (img => {
        const originalSrc = img.src;
        const hoverSrc = img.getAttribute('data-hover');

        img.addEventListener('mouseenter', () => {
            img.src =hoverSrc;
        });
        img.addEventListener('mouseleave', () => {
            img.src = originalSrc;
        });
    })

    // === COMPROBACIÓN DE FORMULARIO ===
    // === POP-UP AL ENVIAR FORMULARIO ===
    //Comprueba que todos los campos esten llenos antes de enviar el formulario y muestra un pop-up cuando se envíe el formulario
    const form = document.querySelector('form');
    const popup = document.getElementById('popup');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('Nombre').value.trim();
        const apellido = document.getElementById('Apellido').value.trim();
        const email = document.getElementById('Email').value.trim();
        const telefono = document.getElementById('Tel').value.trim();

        if(!nombre || !apellido || !email || !telefono) {
            alert('Por favor, completá todos los campos.');
            return;
        }

        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if(!emailValido) {
            alert('Por favor, ingresá un correo electrónico válido.');
            return;
        }

        const telefonoValido = /^[+]?[\d\s\-()]{8,15}$/.test(telefono);
        if(!telefonoValido) {
            alert('Por favor, ingresá un teléfono válido (8 a 15 caracteres).');
            return;
        }

        popup.classList.add('show');
        setTimeout(() => {
            popup.classList.remove('show');
        }, 4000);

        form.reset();
    })

    //=== CONTADOR DE VISITAS ===
    let visitas = localStorage.getItem('contadorVisitas');
    visitas = visitas ? parseInt(visitas) : 0;

    visitas++;
    localStorage.setItem('contadorVisitas', visitas);

    document.getElementById('contador-visitas').textContent = `Visitas: ${visitas}`;

});