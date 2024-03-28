import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { NavigationGuardService } from '../services/naigation-guard/navigation-guard.service';

export const authGuard: CanActivateFn = (route, state) => {
  let _navService = inject(NavigationGuardService)
  let _router = inject(Router)
  const current = _navService.getCurrent();
  const previous = _navService.getPrevious();
  console.log(current," ",previous);
  
  if((current === 'quiz' && previous != 'options') || (current === 'result' && previous != 'quiz') || (current === '' && previous === '')){
    alert("Access Denied!! redirecting to options screen.");
    _router.navigate(['quiz-options'])
    return false;
  }

  return true;
  
};
