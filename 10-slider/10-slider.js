'use strict';

const opcoes = {
    type: 'loop',
    autoplay: true,
    interval: 5000,
    pagination:false
};

//slide
const slider = new Splide('.splide',opcoes);

//Ativando
slider.mount();
