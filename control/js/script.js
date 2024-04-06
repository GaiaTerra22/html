document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector('.loader').style.display = 'none';
        document.querySelector('.content').classList.remove('hidden');
    }, 2000);
});

// Función para determinar la dirección del desplazamiento
function getScrollDirection() {
    if (window.oldScroll > window.scrollY) {
        return 'up'; // Desplazamiento hacia arriba
    } else {
        return 'down'; // Desplazamiento hacia abajo
    }
}

// Función para aplicar la rotación dependiendo de la dirección del desplazamiento
function rotateOnScroll() {
    const direction = getScrollDirection();
    const image = document.querySelector('.rotating-image');
    let currentRotation = parseInt(image.style.transform.replace('rotate(', '').replace('deg)', '')) || 0;
    let newRotation;
    if (direction === 'up') {
        newRotation = currentRotation + 7; // Sumar 5 grados al desplazarse hacia arriba
    } else {
        newRotation = currentRotation - 7; // Restar 5 grados al desplazarse hacia abajo
    }
    image.style.transform = `rotate(${newRotation}deg)`;
    window.oldScroll = window.scrollY;
}

// Subrayar enlace
document.addEventListener("DOMContentLoaded", function () {
    // Obtener el nombre del archivo actual
    var currentPage = location.pathname.split("/").pop();
    // Obtener todos los enlaces de la barra de navegación
    var navLinks = document.querySelectorAll(".navbar-nav .nav-item a");

    // Recorrer todos los enlaces y agregar la clase activa al enlace correspondiente
    navLinks.forEach(function (link) {
        var linkPage = link.getAttribute("href").split("/").pop();

        if (linkPage === currentPage) {
            link.classList.add("active"); // Agregar clase activa al enlace actual
        }
    });
});


// Red Staper made a NICE tutorial about this effect! You should check it out!
// https://www.youtube.com/watch?v=LgiadQQM6mo&t=5s

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleWindowResize);

const spansSlow = document.querySelectorAll('.spanSlow');
const spansFast = document.querySelectorAll('.spanFast');

let width = window.innerWidth;

function handleMouseMove(e) {
    let normalizedPosition = e.pageX / (width / 2) - 1;
    let speedSlow = 100 * normalizedPosition;
    let speedFast = 200 * normalizedPosition;
    spansSlow.forEach((span) => {
        span.style.transform = `translate(${speedSlow}px)`;
    });
    spansFast.forEach((span) => {
        span.style.transform = `translate(${speedFast}px)`
    })
}
//we need to recalculate width when the window is resized
function handleWindowResize() {
    width = window.innerWidth;
}


// Detectar el evento de desplazamiento y llamar a la función para aplicar la rotación
window.addEventListener('scroll', rotateOnScroll);
window.oldScroll = window.scrollY; // Guardar la posición de desplazamiento inicial
