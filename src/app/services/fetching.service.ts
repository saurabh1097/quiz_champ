import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnswersClass, Questions } from '../models/Questions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchingService {
  
  constructor(private https:HttpClient) { }

  createPath(lang: string) {
    let path = '../assets/database/' + lang + '_ans.json';
    return path;
  }

  getData(path:string):Observable<Questions[]>{
    return this.https.get<Questions[]>(path);
  }

  getAnswers(path:string):Observable<AnswersClass[]>{
    return this.https.get<AnswersClass[]>(path);
  }

}
