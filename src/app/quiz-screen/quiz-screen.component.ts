import { Component, OnDestroy, OnInit } from '@angular/core';
import { Questions } from '../models/Questions';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchingService } from '../services/fetching.service';

@Component({
  selector: 'app-quiz-screen',
  templateUrl: './quiz-screen.component.html',
  styleUrls: ['./quiz-screen.component.css'],
})
export class QuizScreenComponent implements OnInit, OnDestroy {

  red: string = '#d6a6fc';
  blue = 'white';
  questions: Questions[] = [];
  questionToDisplay: Questions = new Questions();
  optionSelected: string = '';
  path: string = '';
  optionClicked:string=""
  optionStored:Map<string,string> = new Map<string,string>();
  
  timer:string= "00:20:17";

  constructor(
    private activeRouter: ActivatedRoute,
    private dataService: FetchingService,
    private router:Router
  ) {}
  ngOnDestroy(): void {
    alert('sure you want to exit....');
  }
  ngOnInit(): void {
    this.activeRouter.queryParams.subscribe((params) => {
      this.optionSelected = params['selectedOption'];
      console.log(this.optionSelected);
    });

    this.createPath(this.optionSelected);
    this.dataService.getData(this.path).subscribe((data) => {
      this.questions = data;
      this.questionToDisplay = this.questions[0];
      console.log(data);
    });
  }

  createPath(lang: string) {
    this.path = '../assets/database/' + lang + '_data.json';
  }

  changeQuestion(index: number) {
    this.questionToDisplay = this.questions[index];
  }

  nextQuestion() {
    this.optionClicked=""
    if(this.questions.length -1 >= this.questionToDisplay.index+1){
      this.questionToDisplay = this.questions[this.questionToDisplay.index+1];
      this.chechIsClicked();
    }
  }
  saveAnswer() {
    if(this.optionClicked.length > 0){
      this.optionStored.set(JSON.stringify(this.questionToDisplay.index),this.optionClicked);
      this.nextQuestion();
    }else{
      alert("please select the option to save.")
    }
    console.log("ans selected : ",this.optionStored);
  }
  previousQuestion() {
    if(0 <= this.questionToDisplay.index-1){
      this.questionToDisplay = this.questions[this.questionToDisplay.index-1];
      this.chechIsClicked();
    }
  }

  chechIsClicked(){
    if(this.optionStored.has(this.questionToDisplay.index.toString())){
      let value = this.optionStored.get(this.questionToDisplay.index.toString())
      if(value){
        this.optionClicked = value
      }else{
        this.optionClicked = ""
      }
    }else{
      this.optionClicked = ""
    }
  }

  finishTest() {
    this.router.navigate(["result"])
  }
}
