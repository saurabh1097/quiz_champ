import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Questions } from '../models/Questions';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  private dataSubject = new BehaviorSubject<Questions[]>([]);
  public data$ = this.dataSubject.asObservable();

  constructor() { }
}
