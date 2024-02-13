import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, LeafletMouseEvent, marker, Marker } from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {
  ngOnInit(): void {

  }


  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
        maxZoom: 18, attribution: 'Angular Movie' })
    ],
    zoom: 14,
    center: latLng(-1.265937192733561, 37.00195312500001) 
  };
  layers:Marker<any>[]=[];
  handleMapClick(event : LeafletMouseEvent){
  const latitude = event.latlng.lat;
  const longitude = event.latlng.lng;
  console.log(latitude,longitude);
  this.layers=[];
  this.layers.push(marker([latitude,longitude]));
  }
}
