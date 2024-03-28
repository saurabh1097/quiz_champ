import { Component, OnDestroy, OnInit } from '@angular/core';
import { Questions } from '../models/Questions';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchingService } from '../services/fetching.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import Swal from 'sweetalert2';
import { DataShareService } from '../services/data-share.service';
import { NavigationGuardService } from '../services/naigation-guard/navigation-guard.service';


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
  
  isTimeOver:boolean=false;

  constructor(
    private activeRouter: ActivatedRoute,
    private dataService: FetchingService,
    private router:Router,
    private dialog: MatDialog,
    private dataShare:DataShareService,
    private navigationService:NavigationGuardService

  ) {}
  ngOnDestroy(): void {
    this.dataShare.setQuestionList([]);
    this.dataShare.setSavedData(new Map<string,string>());
    this.dataShare.setQuestionList(this.questions);
    this.dataShare.setSavedData(this.optionStored);
  }
  ngOnInit(): void {
    this.activeRouter.queryParams.subscribe((params) => {
      this.optionSelected = params['selectedOption'];
      this.dataShare.setLanguage(this.optionSelected);
      console.log(this.optionSelected);
    });
    

    this.createPath(this.optionSelected);
    this.dataService.getData(this.path).subscribe((data) => {
      this.questions = data;
      this.questionToDisplay = this.questions[0];
    });

  }

  createPath(lang: string) {
    this.path = '../assets/database/' + lang + '_data.json';
  }

  changeQuestion(index: number) {
    this.questionToDisplay = this.questions[index];
    this.chechIsClicked();
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
    if(!this.isTimeOver){
      this.openConfirmationDialog()
    }else{
      this.timeOutMessage()
      this.router.navigate(["result"])
    }
    this.setNavigationHistory()
  }

  setNavigationHistory(){
    this.navigationService.setCurrentPage("result");
    this.navigationService.setPreviousPage("quiz");
    console.log("current",this.navigationService.getCurrent()," previous ",this.navigationService.getPrevious());

  }

  timerCheck(isTimeOut: any) {
    console.log(isTimeOut);
    if(isTimeOut){
      this.isTimeOver = true;
      this.finishTest()
    }
  }



  //confirmation code 
  openConfirmation(): void {
    const dialogRef = this.dialog.open(PopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // User clicked 'Proceed'
        console.log('Proceed with action');
      } else {
        // User clicked 'Cancel' or closed the dialog
        console.log('Cancelled action');
      }
    });
  }

  openConfirmationDialog(): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to end the test!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes!',
      cancelButtonText: 'No!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(["result"])
        // Perform the action you want to confirm here
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        
      }
    });
  }


  timeOutMessage(): void {
    Swal.fire('OOPS', 'Test time is over!', 'success');
  }
  


  

}
