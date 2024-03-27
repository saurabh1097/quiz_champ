import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit{

  @Output() timeOver:EventEmitter<Boolean> = new EventEmitter<Boolean>();
  timeLeft: number = 3600;
  isTimeOver: boolean=false;


  ngOnInit(): void {
    this.startTimer();
  }

  


  startTimer() {
    const interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(interval);
      }
    }, 1000);
  }


  formatTime(seconds: number): string {
    if(seconds == 0){
      console.log(true);
      this.isTimeOver = true;
      this.timeOver.emit(true);
      //this.finishTest();
    }
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(secs)}`;
  }
  
  pad(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }
}
