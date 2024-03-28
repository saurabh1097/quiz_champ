import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../services/data-share.service';
import { AnswersClass, Questions } from '../models/Questions';
import { FetchingService } from '../services/fetching.service';

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
  totlaQuestions:number=0;
  indexesOfCorrect: number[] = [];
  indexesOfWrong: number[] = [];
  questions: Questions[] = [];
  saved: Map<string, string> = new Map<string, string>();
  langSelected: string = '';
  listOfAnswers: AnswersClass[] = [];
  isPassed!: boolean;
  constructor(
    private dataSare: DataShareService,
    private dataFetch: FetchingService
  ) {}

   ngOnInit() {
    this.dataSare.$languageSelected.subscribe((lang) => {
      this.langSelected = lang;
    });
    this.getAnswers();
    this.getQuizData();
  }

  //fetching the questions data from the json files using service
  getQuizData() {
    this.dataSare.$question.subscribe((res) => {
      this.questions = res;
    });
    this.dataSare.$savedData.subscribe((saved) => {
      this.saved = saved;
    });
  }

  //fetching the answers from json file using service
  getAnswers() {
    this.showLoader()
    let path = this.dataFetch.createPath(this.langSelected);
    this.dataFetch.getAnswers(path).subscribe((answers) => {
      this.listOfAnswers = answers;
      console.log("1", this.listOfAnswers);
      // Call calculateResult here if you want to ensure listOfAnswers is initialized before calculating the result
      this.calculateResult();
    });
  }
  

  calculateResult() {
    console.log("2",this.listOfAnswers);
  //   this.saved = new Map([
  //     [
  //         "0",
  //         "4"
  //     ],
  //     [
  //         "1",
  //         "4"
  //     ],
  //     [
  //         "2",
  //         "4"
  //     ],
  //     [
  //         "3",
  //         "4"
  //     ],
  //     [
  //         "4",
  //         "4"
  //     ],
  //     [
  //         "5",
  //         "4"
  //     ],
  //     [
  //         "6",
  //         "4"
  //     ],
  //     [
  //         "7",
  //         "4"
  //     ],
  //     [
  //         "8",
  //         "3"
  //     ],
  //     [
  //         "9",
  //         "2"
  //     ],
  //     [
  //         "10",
  //         "1"
  //     ],
  //     [
  //         "11",
  //         "3"
  //     ],
  //     [
  //         "12",
  //         "2"
  //     ],
  //     [
  //         "13",
  //         "2"
  //     ],
  //     [
  //         "14",
  //         "2"
  //     ],
  //     [
  //         "15",
  //         "3"
  //     ],
  //     [
  //         "16",
  //         "2"
  //     ],
  //     [
  //         "17",
  //         "3"
  //     ],
  //     [
  //         "18",
  //         "1"
  //     ],
  //     [
  //         "19",
  //         "3"
  //     ],
  //     [
  //         "20",
  //         "2"
  //     ]
  // ])
    
    for (let [key, value] of this.saved) {
      let tempQuestion = this.questions[JSON.parse(key)];
      let ans = this.listOfAnswers[JSON.parse(key)];

      if (value === ans.correctAnswer) {
        this.correct++;
        this.indexesOfCorrect.push(JSON.parse(value));
      } else {
        this.wrong++;
        this.indexesOfWrong.push(JSON.parse(value));
      }
    }

    this.answered = this.saved.size;
    this.totlaQuestions = this.questions.length;
    this.finalScore = (this.correct / this.totlaQuestions) * 100;
    if(this.finalScore < 70){
      this.isPassed = true;
    }else{
      this.isPassed = false;
    }
    console.log("ispassed ",this.isPassed);
    
    this.finalScore = parseFloat(this.finalScore.toFixed(2));
    this.showResult()
  }

  calculateAdditionalDetails() {
    this.answered = this.saved.size;
    this.totlaQuestions = this.questions.length;
    this.finalScore = (this.correct / this.totlaQuestions) * 100;
    this.finalScore = parseFloat(this.finalScore.toFixed(2));
    this.showResult()
  }

  showResult() {
    console.log(
      this.answered,
      ' ',
      this.correct,
      ' ',
      this.finalScore,
      ' ',
      this.wrong,
      ' ' ,
      this.indexesOfCorrect,
      ' ',
      this.indexesOfWrong
    );
  }

  isLoading!:boolean
  showLoader() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); // 3000 milliseconds = 3 seconds
  }
  
}
