import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../services/data-share.service';
import { Questions } from '../models/Questions';

@Component({
  selector: 'app-result-screen',
  templateUrl: './result-screen.component.html',
  styleUrls: ['./result-screen.component.css'],
})
export class ResultScreenComponent implements OnInit {
  finalScore: number = 0;
  answered: number = 0;
  correct: number = 0;
  wrong: number = 0;
  indexesOfCorrect:number[]=[]
  indexesOfWrong:number[]=[]
  questions: Questions[] = [];
  saved: Map<string, string> = new Map<string, string>();
  constructor(private dataSare: DataShareService) {}
  ngOnInit(): void {
    this.getQuizData();
    this.calculateResult();
    this.calculateAdditionalDetails()
    this.showResult()
  }

  //fetching the data from the service
  getQuizData() {
    this.dataSare.$question.subscribe((res) => {
      this.questions = res;
    });
    this.dataSare.$savedData.subscribe((saved) => {
      this.saved = saved;
    });
  }

  calculateResult() {

    for (let [key, value] of this.saved) {
      let tempQuestion = this.questions[JSON.parse(key)];
      let ans = ""
      switch(value){
        case "1":
          ans = tempQuestion.option1;
          break;
        case "2":
          ans = tempQuestion.option2;
          break;
        case "3":
          ans = tempQuestion.option3;
          break;
        case "4":
          ans = tempQuestion.option4;
          break;

      }
      if(tempQuestion.answer.includes(ans)){
        this.correct++;
        this.indexesOfCorrect.push(JSON.parse(value))
      }else{
        this.wrong++;
        this.indexesOfWrong.push(JSON.parse(value));
      }
    }
  }

  calculateAdditionalDetails() {
    this.answered = this.saved.size;
    this.finalScore = (this.correct/this.questions.length)*100;
  }

  showResult(){
    console.log(this.answered," ",this.correct," ",this.finalScore," ",this.wrong," "+this.indexesOfCorrect," ",this.indexesOfWrong);
    
  }
}
