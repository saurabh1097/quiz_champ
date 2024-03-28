import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Questions } from '../models/Questions';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  private questionList = new BehaviorSubject<Questions[]>([]);
  private savedData = new BehaviorSubject<Map<string,string>>(new Map<string,string>())
  private languageSelected = new BehaviorSubject<string>("");
  public $question = this.questionList.asObservable();
  public $savedData = this.savedData.asObservable();
  public $languageSelected = this.languageSelected.asObservable();


  constructor() { }

  setQuestionList(list:Questions[]){
    this.questionList.next(list);
  }

  setSavedData(data:Map<string,string>){
    this.savedData.next(data);
  }

  setLanguage(lang:string){
    this.languageSelected.next(lang);
  }
}
