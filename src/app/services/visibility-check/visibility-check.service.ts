import { Injectable } from '@angular/core';
import { NavigationGuardService } from '../naigation-guard/navigation-guard.service';

@Injectable({
  providedIn: 'root'
})
export class VisibilityCheckService {

  constructor(private nvaigation:NavigationGuardService) { 
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if(nvaigation.getCurrent() == 'quiz')
          alert('Warning: You have switched tabs or minimized the browser.');
      }
    });
  }
}
