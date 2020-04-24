import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Repository } from './shared/models/repository.model'
@Injectable({
  providedIn: 'root'
})
export class RestService {
   endpoint = "https://api.github.com/users/ambrossRake/repos";
   httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json',
                              'Accept': 'application/vnd.github.v3.full+json'})
  };

  constructor(private http: HttpClient) {
  }

  getRepositories(): Observable<Repository[]>{
    return this.http.get<Repository[]>(this.endpoint);
  }
}
