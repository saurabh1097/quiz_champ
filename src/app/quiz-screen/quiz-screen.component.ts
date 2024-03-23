import { Component } from '@angular/core';
import { Questions } from '../models/Questions';

@Component({
  selector: 'app-quiz-screen',
  templateUrl: './quiz-screen.component.html',
  styleUrls: ['./quiz-screen.component.css']
})
export class QuizScreenComponent {
changeQuestion(index: number) {
  this.questionToDisplay = this.questions[index];
//throw new Error('Method not implemented.');
}
  red:string="#d6a6fc"
  blue="white"
  questions: Questions[] = [
    {
        question: "What is Angular?",
        answer: "Angular is a web application framework.",
        option1: "A programming language.",
        option2: "A database management system.",
        option3: "A web application framework.",
        option4: "An operating system.",
        answerExplanation: "Angular is a framework for building client-side web applications.",
        languages: "TypeScript, JavaScript",
        index:0
    },
    {
        question: "What is TypeScript?",
        answer: "TypeScript is a superset of JavaScript.",
        option1: "A programming language.",
        option2: "A database management system.",
        option3: "A web application framework.",
        option4: "An operating system.",
        answerExplanation: "TypeScript is a statically typed language that compiles to plain JavaScript.",
        languages: "TypeScript, JavaScript",
        index:1
    },
    {
      question: "What is TypeScript?",
      answer: "TypeScript is a superset of JavaScript.",
      option1: "A programming language.",
      option2: "A database management system.",
      option3: "A web application framework.",
      option4: "An operating system.",
      answerExplanation: "TypeScript is a statically typed language that compiles to plain JavaScript.",
      languages: "TypeScript, JavaScript",
      index:3
  },
  {
    question: "What is TypeScript?",
    answer: "TypeScript is a superset of JavaScript.",
    option1: "A programming language.",
    option2: "A database management system.",
    option3: "A web application framework.",
    option4: "An operating system.",
    answerExplanation: "TypeScript is a statically typed language that compiles to plain JavaScript.",
    languages: "TypeScript, JavaScript",
    index:4
},
{
  question: "What is TypeScript?",
  answer: "TypeScript is a superset of JavaScript.",
  option1: "A programming language.",
  option2: "A database management system.",
  option3: "A web application framework.",
  option4: "An operating system.",
  answerExplanation: "TypeScript is a statically typed language that compiles to plain JavaScript.",
  languages: "TypeScript, JavaScript",
  index:5
},
{
  question: "What is TypeScript?",
  answer: "TypeScript is a superset of JavaScript.",
  option1: "A programming language.",
  option2: "A database management system.",
  option3: "A web application framework.",
  option4: "An operating system.",
  answerExplanation: "TypeScript is a statically typed language that compiles to plain JavaScript.",
  languages: "TypeScript, JavaScript",
  index:6
},
{
  question: "What is TypeScript?",
  answer: "TypeScript is a superset of JavaScript.",
  option1: "A programming language.",
  option2: "A database management system.",
  option3: "A web application framework.",
  option4: "An operating system.",
  answerExplanation: "TypeScript is a statically typed language that compiles to plain JavaScript.",
  languages: "TypeScript, JavaScript",
  index:7
},
{
  question: "What is TypeScript?",
  answer: "TypeScript is a superset of JavaScript.",
  option1: "A programming language.",
  option2: "A database management system.",
  option3: "A web application framework.",
  option4: "An operating system.",
  answerExplanation: "TypeScript is a statically typed language that compiles to plain JavaScript.",
  languages: "TypeScript, JavaScript",
  index:8
},
{
  question: "What is TypeScript?",
  answer: "TypeScript is a superset of JavaScript.",
  option1: "A programming language.",
  option2: "A database management system.",
  option3: "A web application framework.",
  option4: "An operating system.",
  answerExplanation: "TypeScript is a statically typed language that compiles to plain JavaScript.",
  languages: "TypeScript, JavaScript",
  index:9
},
{
  question: "What is TypeScript?",
  answer: "TypeScript is a superset of JavaScript.",
  option1: "A programming language.",
  option2: "A database management system.",
  option3: "A web application framework.",
  option4: "An operating system.",
  answerExplanation: "TypeScript is a statically typed language that compiles to plain JavaScript.",
  languages: "TypeScript, JavaScript",
  index:10
}
];
questionToDisplay:Questions = this.questions[0];
}
