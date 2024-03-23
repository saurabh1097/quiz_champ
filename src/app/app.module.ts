import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonColorPipe } from './pipes/button-color.pipe';
import { QuizOptionsComponent } from './quiz-options/quiz-options.component';
import { OptionsLinkComponent } from './options-link/options-link.component';
import { QuizScreenComponent } from './quiz-screen/quiz-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonColorPipe,
    QuizOptionsComponent,
    OptionsLinkComponent,
    QuizScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
