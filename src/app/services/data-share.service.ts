import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Questions } from '../models/Questions';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  private questionList = new BehaviorSubject<Questions[]>([]);
  private savedData = new BehaviorSubject<Map<string,string>>(new Map<string,string>())
  public $question = this.questionList.asObservable();
  public $savedData = this.savedData.asObservable();

  constructor() { }

  setQuestionList(list:Questions[]){
    this.questionList.next(list);
  }

  setSavedData(data:Map<string,string>){
    this.savedData.next(data);
  }
}
