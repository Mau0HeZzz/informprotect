// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


document.addEventListener('DOMContentLoaded', function () {
  if (ymaps) {
    ymaps.ready(init)
  }

  function init() {
    const maps =document.querySelectorAll('[data-map]');
    if (maps.length) {
      maps.forEach(map=>{
        let center = map.dataset.center.replaceAll(' ', '').split(',');
        let marker = map.dataset.marker.replaceAll(' ', '').split(',');
        let zoom = map.dataset.zoom;

        let contacsMap = new ymaps.Map(map, {
            center: center, 
            zoom: zoom
        }, {});

        
        let contactsPlacemark = new ymaps.Placemark(marker, {}, {});
        contacsMap.geoObjects.add(contactsPlacemark); 
        contacsMap.behaviors.disable('scrollZoom'); 
      })
    }
  }
})