import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Questions } from '../models/Questions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchingService {
  
  constructor(private https:HttpClient) { }

  getData(path:string):Observable<Questions[]>{
    return this.https.get<Questions[]>(path);
  }
}
