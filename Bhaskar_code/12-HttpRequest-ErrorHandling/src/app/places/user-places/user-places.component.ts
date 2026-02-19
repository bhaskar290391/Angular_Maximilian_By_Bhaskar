import { Component, DestroyRef, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';

import { Place } from '../place.model';

import { PlacesService } from '../places.service';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent {
  // places = signal<Place[] | undefined>(undefined);
  places = this.placeService.loadedUserPlaces;
  isFetching = signal(false);
  error = signal('');
  constructor(
    private placeService: PlacesService,
    private destroyRef: DestroyRef,
  ) {}

  ngOnInit(): void {
    this.isFetching.set(true);
    const subscription = this.placeService.loadUserPlaces().subscribe({
      error: (error: Error) => {
        this.error.set(error.message);
      },
      complete: () => {
        this.isFetching.set(false);
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
