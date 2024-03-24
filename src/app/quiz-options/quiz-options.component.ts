import { Component } from '@angular/core';
import { langWithColor } from '../models/LangColor';
import { Router } from '@angular/router';


@Component({
  selector: 'app-quiz-options',
  templateUrl: './quiz-options.component.html',
  styleUrls: ['./quiz-options.component.css'],
})
export class QuizOptionsComponent {
  constructor(private router:Router){

  }
  redirectToQuiz(lang:string) {
    this.router.navigate(['/quiz'],{queryParams: {"selectedOption":lang}});
  }
  quiz_options: langWithColor[] = [
    { lang: 'java', color: 'yellow' },
    { lang: 'nodejs', color: 'green' },
    { lang: 'python', color: 'blue' },
    { lang: 'ruby', color: 'red' },
    { lang: 'typescript', color: 'lightblue' },
    { lang: 'c++', color: 'orange' },
    { lang: 'c#', color: 'purple' },
    { lang: 'html', color: 'brown' },
    { lang: 'css', color: 'cyan' },
    { lang: 'javascript', color: 'pink' },
    { lang: 'sql', color: 'teal' },
  ];
}
