import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CafeService {
  private apiUrl = 'http://localhost:4000/api/cafes/nearby';

  constructor(private http: HttpClient) {}

  getNearbyCafes(lat: number, lng: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?lat=${lat}&lng=${lng}&radius=1500`);
  }

  getPhoto(photoReference: string, maxWidth = 600): Observable<string> {
    // const url = `/api/photo?name=${encodeURIComponent(photoReference)}&maxwidth=${maxWidth}`;
    // return of(url);
    return of('');
  }
}
