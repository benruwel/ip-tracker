import { Injectable } from '@angular/core';
import { latLng, Marker, tileLayer, Map as LeafletMap, marker } from 'leaflet';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  // @ts-ignore
  private iAmHereMarkerSubj: BehaviorSubject<Marker> = new BehaviorSubject<Marker>(
    null
  );
  iAmHereMarker$: Observable<Marker> = this.iAmHereMarkerSubj.asObservable();

  map!: LeafletMap;

  constructor() {
    const currentLocation = marker(
      latLng(-1.285910400572269, 36.82284887686982)
    ).bindPopup('I am here');
    this.iAmHereMarkerSubj.next(currentLocation);
  }

  initMap(leafletMap: LeafletMap): void {
    this.map = leafletMap;
  }

  changeMarker(lat: number, lng: number, focus: boolean): void {
    const coords = { lat, lng };
    const newPoint = marker(latLng(coords.lat, coords.lng)).bindPopup(
      'I am here'
    );
    this.iAmHereMarkerSubj.next(newPoint);
    if (focus) {
      this.map.flyTo(coords, 16);
    }
  }

  get mapOptions(): any {
    return {
      layers: [
        tileLayer(
          'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
          {
            attribution:
              'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012',

            maxZoom: 18,
            tileSize: 512,
            zoomOffset: -1,
          }
        ),
      ],
      zoom: 16,
      center: latLng(-1.285910400572269, 36.82284887686982),
    };
  }
}
