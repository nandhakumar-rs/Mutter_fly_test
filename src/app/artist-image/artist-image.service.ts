import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistImageService {

  constructor(private http: HttpClient) { }

  getPhotosOfArtist(artist) {
    return this.http.get<any>(`${environment.baseUrl}users/${artist}/photos`)
  }
}
