import { Component, DestroyRef, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { HttpClient } from '@angular/common/http';
import { Place } from '../place.model';
import { catchError, map, throwError } from 'rxjs';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent {
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
      .get<{ places: Place[] }>('http://localhost:3000/user-places')
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
}
