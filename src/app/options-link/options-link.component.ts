import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options-link',
  templateUrl: './options-link.component.html',
  styleUrls: ['./options-link.component.css']
})
export class OptionsLinkComponent {
  text = "The website is a comprehensive platform offering a wide range of quizzes related to technologies, programming languages, and frameworks. It aims to test and enhance users' knowledge in various IT fields, making learning interactive and engaging. With a user-friendly interface, the website provides an enjoyable quiz experience for both beginners and experts. Users can explore quizzes on popular languages like Java, Python, and JavaScript, as well as cutting-edge technologies such as machine learning and blockchain. Additionally, the website offers detailed explanations for each question, helping users understand the concepts behind the answers. Whether users are looking to test their skills or learn something new, the website provides a valuable resource for tech enthusiasts.";

  constructor(private router:Router){

  }
redirectToQuizOptions(){
  this.router.navigate(['/quiz-options']);
}
  
}
