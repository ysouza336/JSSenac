'use strict'

let lightbox = new SimpleLightbox('.gallery a', { 
    overlayOpacity:0.7,
    download:true,
    maxZoom:30
});

const opcoes = {
    type: 'loop',
    autoplay: true,
    interval: 5000,
    pagination:false,
};
//slide
const slider = new Splide('.splide',opcoes);



//Ativando
slider.mount();