import { Component, DestroyRef, Inject, OnInit, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  error = signal('');
  constructor(
    private httpclient: HttpClient,
    private destroyRef: DestroyRef,
  ) {}

  ngOnInit(): void {
    this.isFetching.set(true);
    const subscription = this.httpclient
      .get<{ places: Place[] }>('http://localhost:3000/places')
      .pipe(
        map((data) => data.places),
        catchError((error) => {
          console.log(error);
          return throwError(
            () => new Error('Something Went wrong please try again later .!!!'),
          );
        }),
      )
      .subscribe({
        next: (response) => {
          this.places.set(response);
        },

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

  onSelectplace(selectedPlace: Place) {
    this.httpclient
      .put('http://localhost:3000/user-places', { placeId: selectedPlace.id })
      .subscribe({
        next: (response: any) => {
          console.log(response);
        },
      });
  }
}
