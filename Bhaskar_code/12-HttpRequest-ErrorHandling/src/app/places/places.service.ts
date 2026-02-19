import { Injectable, signal } from '@angular/core';

import { Place } from './place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private userPlaces = signal<Place[]>([]);
  loadedUserPlaces = this.userPlaces.asReadonly();
  constructor(private httpclient: HttpClient) {}

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
    this.userPlaces.update((prev) => [...prev, place]);
    return this.httpclient.put('http://localhost:3000/user-places', {
      placeId: place.id,
    });
  }

  removeUserPlace(place: Place) {}

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
