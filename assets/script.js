// Definir imágenes para cada gama
const telefonosBaja = [
    '../resource/pictures_phone_gamas/gama_baja/1.webp',
    '../resource/pictures_phone_gamas/gama_baja/2.webp',
    '../resource/pictures_phone_gamas/gama_baja/3.webp',
    '../resource/pictures_phone_gamas/gama_baja/4.webp',
    '../resource/pictures_phone_gamas/gama_baja/5.webp',
    '../resource/pictures_phone_gamas/gama_baja/6.webp',
    '../resource/pictures_phone_gamas/gama_baja/7.webp',
    '../resource/pictures_phone_gamas/gama_baja/8.webp',
    '../resource/pictures_phone_gamas/gama_baja/9.webp'
];

const telefonosMedia = [
    '../resource/pictures_phone_gamas/gama_media/1.webp',
    '../resource/pictures_phone_gamas/gama_media/2.webp',
    '../resource/pictures_phone_gamas/gama_media/3.webp',
    '../resource/pictures_phone_gamas/gama_media/4.webp',
    '../resource/pictures_phone_gamas/gama_media/5.webp',
    '../resource/pictures_phone_gamas/gama_media/7.webp',
    '../resource/pictures_phone_gamas/gama_media/8.webp',
    '../resource/pictures_phone_gamas/gama_media/9.webp',
    '../resource/pictures_phone_gamas/gama_media/10.webp',
    '../resource/pictures_phone_gamas/gama_media/11.webp',
    '../resource/pictures_phone_gamas/gama_media/12.webp',
    '../resource/pictures_phone_gamas/gama_media/13.webp',
    '../resource/pictures_phone_gamas/gama_media/14.webp',
    '../resource/pictures_phone_gamas/gama_media/15.webp',
    '../resource/pictures_phone_gamas/gama_media/16.webp'
];

const telefonosAlta = [
    '../resource/pictures_phone_gamas/gama_alta/1.webp',
    '../resource/pictures_phone_gamas/gama_alta/2.webp',
    '../resource/pictures_phone_gamas/gama_alta/3.webp',
    '../resource/pictures_phone_gamas/gama_alta/4.webp',
    '../resource/pictures_phone_gamas/gama_alta/5.webp',
    '../resource/pictures_phone_gamas/gama_alta/6.webp',
    '../resource/pictures_phone_gamas/gama_alta/7.webp',
    '../resource/pictures_phone_gamas/gama_alta/8.webp',
    '../resource/pictures_phone_gamas/gama_alta/9.webp',
    '../resource/pictures_phone_gamas/gama_alta/10.webp'
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
    cambiarCarrusel(telefonosBaja); // Cargar imágenes de gama baja
});

document.getElementById('btnradio2').addEventListener('change', function() {
    cambiarCarrusel(telefonosMedia); // Cargar imágenes de gama media
});

document.getElementById('btnradio3').addEventListener('change', function() {
    cambiarCarrusel(telefonosAlta); // Cargar imágenes de gama alta
});
