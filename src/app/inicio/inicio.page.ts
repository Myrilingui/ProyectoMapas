import { Component, OnInit } from '@angular/core';

declare var google : any ;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  map = null;

  constructor() { }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    const mapEle: HTMLElement | null = document.getElementById('map');
    
    if (mapEle !== null) {
      // Check if geolocation is available
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const myLatLng = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          
          this.map = new google.maps.Map(mapEle, {
            center: myLatLng,
            zoom: 12
          });
    
          google.maps.event.addListenerOnce(this.map, 'idle', () => {
            mapEle.classList.add('show-map');
          });
        }, (error) => {
          console.error('Error getting location:', error);
          // Fallback to a default location if getting user location fails
          const defaultLatLng = { lat: 4.658383846282959, lng: -74.09394073486328 };
          this.map = new google.maps.Map(mapEle, {
            center: defaultLatLng,
            zoom: 12
          });
    
          google.maps.event.addListenerOnce(this.map, 'idle', () => {
            mapEle.classList.add('show-map');
          });
        });
      } else {
        console.error('Geolocation is not available.');
        // Fallback to a default location if geolocation is not available
        const defaultLatLng = { lat: 4.658383846282959, lng: -74.09394073486328 };
        this.map = new google.maps.Map(mapEle, {
          center: defaultLatLng,
          zoom: 12
        });
  
        google.maps.event.addListenerOnce(this.map, 'idle', () => {
          mapEle.classList.add('show-map');
        });
      }
    } else {
      console.error("Element with ID 'map' not found.");
    }
  }
}
