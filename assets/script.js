// Definir imágenes para cada gama
const telefonosBaja = [
    '../resource/pictures_phone_gamas/bmobiile_4.png',
    '../resource/pictures_phone_gamas/bmobiile_2.png',
    '../resource/pictures_phone_gamas/bmobiile_1.png',
    '../resource/pictures_phone_gamas/bmobiile_3.png'
];

const telefonosMedia = [
    '../resource/pictures_phone_gamas/tecno_.png',
    '../resource/pictures_phone_gamas/motorola_.png',
    '../resource/pictures_phone_gamas/motorola.png',
    '../resource/pictures_phone_gamas/inifinix_.png'
];

const telefonosAlta = [
    '../resource/pictures_phone_gamas/samsung_.png',
    '../resource/pictures_phone_gamas/samsung.png',
    '../resource/pictures_phone_gamas/xiaomi.png',
    '../resource/pictures_phone_gamas/honor.png'
];
document.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.fade-in');
    elements.forEach(function(element) {
        var position = element.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1.2;
        if (position < screenPosition) {
            element.classList.add('visible');
        }
    });
});

// Función para cambiar las imágenes del carrusel
function cambiarCarrusel(telefonos) {
    console.log('Cambiar carrusel llamado con:', telefonos);
    const carouselPhones = document.getElementById('carouselPhones').querySelector('.carousel-inner');
    carouselPhones.innerHTML = ''; // Vaciar el contenido actual

    telefonos.forEach((telefono, index) => {
        const activeClass = index === 0 ? 'active' : ''; // Primer elemento es activo
        carouselPhones.innerHTML += `
            <div class="carousel-item ${activeClass}">
                <img src="${telefono}" class="d-block w-100" alt="Imagen ${index + 1}">
            </div>
        `;
    });
}


// Detectar el cambio de selección de gama
document.getElementById('btnradio1').addEventListener('change', function() {
    if (this.checked) { // Verifica que el radio button esté seleccionado
        cambiarCarrusel(telefonosBaja); // Cargar imágenes de gama baja
    }
});

document.getElementById('btnradio2').addEventListener('change', function() {
    if (this.checked) { // Verifica que el radio button esté seleccionado
        cambiarCarrusel(telefonosMedia); // Cargar imágenes de gama media
    }
});

document.getElementById('btnradio3').addEventListener('change', function() {
    if (this.checked) { // Verifica que el radio button esté seleccionado
        cambiarCarrusel(telefonosAlta); // Cargar imágenes de gama alta
    }
});

