import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Project } from './shared/models/project.model'
@Injectable({
  providedIn: 'root'
})
export class RestService {
   endpoint = "http://localhost:8080/api/";
   httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(this.endpoint + 'projects');
  }
}