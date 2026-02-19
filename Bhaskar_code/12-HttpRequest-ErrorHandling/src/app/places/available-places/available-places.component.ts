import { Component, DestroyRef, Inject, OnInit, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  private destroyRef = Inject(DestroyRef);

  constructor(private httpclient: HttpClient) {}

  ngOnInit(): void {
    const subscription = this.httpclient
      .get<{ places: Place[] }>('http://localhost:3000/places')
      .subscribe({
        next: (response) => {
          console.log(response);
        },
      });

    this.destroyRef.onDestroy();
  }
}
