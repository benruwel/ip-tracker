import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MapService } from '../../services/map.service';
import { IpService } from '../../services/ip.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Marker } from 'leaflet';

@Component({
  selector: 'tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css'],
})
export class TrackerComponent implements OnInit, AfterViewInit {
  @ViewChild('mapParentContainer', { read: ElementRef, static: false })
  parentContainer: ElementRef;

  iAmHereMarker$: Observable<Marker> = this.mapService.iAmHereMarker$;
  mapHeight$: BehaviorSubject<number> = new BehaviorSubject<number>(200);
  mapOptions = this.mapService.mapOptions;

  constructor(
    private mapService: MapService,
    private ipService: IpService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const parentHeight = this.parentContainer.nativeElement.offsetHeight;
    this.mapHeight$.next(parentHeight);
    console.log(parentHeight);
    this.cdRef.detectChanges();
  }

  onMapReady(event: any): void {
    this.mapService.initMap(event);
  }
}
