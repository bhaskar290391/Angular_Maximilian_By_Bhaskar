import { Injectable, signal } from '@angular/core';

import { Place } from './place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap, throwError } from 'rxjs';
import { ErrorService } from '../shared/error.service';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private userPlaces = signal<Place[]>([]);
  loadedUserPlaces = this.userPlaces.asReadonly();
  constructor(
    private httpclient: HttpClient,
    private errorService: ErrorService,
  ) {}

  loadAvailablePlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/places',
      'Something went wrong while fetching Available places .Try again later',
    );
  }

  loadUserPlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/user-places',
      'Something went wrong while fetching Favourite places .Try again later',
    ).pipe(tap({ next: (response) => this.userPlaces.set(response) }));
  }

  addPlaceToUserPlaces(place: Place) {
    const prevPlace = this.userPlaces();

    if (!prevPlace.some((prev) => prev.id === place.id)) {
      this.userPlaces.set([...prevPlace, place]);
    }

    return this.httpclient
      .put('http://localhost:3000/user-places', {
        placeId: place.id,
      })
      .pipe(
        catchError((error) => {
          this.userPlaces.set(prevPlace);
          console.log('Error while adding place into favourite');
          this.errorService.showError(
            'Error while adding place into favourite',
          );
          return throwError(
            () => new Error('Error while adding place into favourite'),
          );
        }),
      );
  }

  removeUserPlace(place: Place) {
    const prevPlace = this.userPlaces();

    if (prevPlace.some((prev) => prev.id === place.id)) {
      this.userPlaces.set(prevPlace.filter((data) => data.id !== place.id));
    }

    return this.httpclient
      .delete('http://localhost:3000/user-places/' + place.id)
      .pipe(
        catchError((error) => {
          this.userPlaces.set(prevPlace);
          console.log('Error while deleting place from favourite');
          this.errorService.showError(
            'Error while deleting place from favourite',
          );
          return throwError(
            () => new Error('Error while removing place into favourite'),
          );
        }),
      );
  }

  private fetchPlaces(url: string, message: string) {
    return this.httpclient.get<{ places: Place[] }>(url).pipe(
      map((data) => data.places),
      catchError((error) => {
        console.log(error);
        return throwError(() => new Error(message));
      }),
    );
  }
}
