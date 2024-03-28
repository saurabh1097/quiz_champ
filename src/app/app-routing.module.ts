import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizOptionsComponent } from './quiz-options/quiz-options.component';
import { AppComponent } from './app.component';
import { OptionsLinkComponent } from './options-link/options-link.component';
import { QuizScreenComponent } from './quiz-screen/quiz-screen.component';
import { ResultScreenComponent } from './result-screen/result-screen.component';
import { PopupComponent } from './popup/popup.component';
import { authGuard } from './auth-guard/auth.guard';

const routes: Routes = [
  {path: 'quiz-options', component:QuizOptionsComponent,title:'quiz-options'},
  {path: 'home',component:AppComponent},
  {path: 'showLink', component:OptionsLinkComponent},
  {path:"quiz",component:QuizScreenComponent,canActivate:[authGuard]},
  {path:"",component:OptionsLinkComponent},
  {path:"result",component:ResultScreenComponent,canActivate:[authGuard]},
  {path:"popup",component:PopupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
