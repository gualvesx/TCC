
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

document.addEventListener("DOMContentLoaded", function () {
  // Definir limites para o SENAI Presidente Prudente
  var bounds = L.latLngBounds(
    [-22.122, -51.408], // Canto superior esquerdo
    [-22.119, -51.403]  // Canto inferior direito
  );

  // Criar o mapa travado nos limites do SENAI
  var map = L.map('map', {
    center: [-22.1206, -51.4059], // Coordenadas do SENAI
    zoom: 17,  // Zoom inicial
    minZoom: 17, // Zoom mínimo permitido
    maxZoom: 19, // Zoom máximo permitido
    maxBounds: bounds, // Impede que o usuário vá para fora dessa área
    maxBoundsViscosity: 1.0 // Evita que o mapa "escape" dos limites
  });

  // Adicionar os tiles do OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Ícone personalizado para o ponto de coleta
  var pointIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/684/684908.png', // Ícone de ponto
    iconSize: [32, 32],  // Tamanho do ícone
    iconAnchor: [16, 32], // Posição da âncora do ícone
    popupAnchor: [0, -32] // Posição do popup em relação ao ícone
  });

  // Adicionar um marcador no SENAI
  L.marker([-22.1206, -51.4059], { icon: pointIcon }).addTo(map)
    .bindPopup("📍 Ponto de Coleta - SENAI Presidente Prudente");
});