import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchImageService {
  constructor(private http: HttpClient) { }
  searchPhotos(term, page) {
    return this.http.get<any>(`${environment.baseUrl}search/photos?page=${page}&query=${term}`)
  }
}
