import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonColorPipe } from './pipes/button-color.pipe';
import { QuizOptionsComponent } from './quiz-options/quiz-options.component';
import { OptionsLinkComponent } from './options-link/options-link.component';
import { QuizScreenComponent } from './quiz-screen/quiz-screen.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultScreenComponent } from './result-screen/result-screen.component';
import { FormsModule } from '@angular/forms';
import { TimerComponent } from './quiz-screen/timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonColorPipe,
    QuizOptionsComponent,
    OptionsLinkComponent,
    QuizScreenComponent,
    ResultScreenComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
