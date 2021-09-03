import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //TODO 2     tag <app-root> in html
  templateUrl: './app.component.html', //TODO 3
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-course-try1'; //TODO 3       is at the rocked

  data = {  //TODO 4       is in the red box
    title: 'Klick me!!',
    text: 'write something',
    myName: 'Mia'
  };

  style = {   //for styling --> style always in css pleeaas, this is just for testing
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '5vw',
    padding: '1vw'
  }

  //TODO 5      function
  message() {
    alert('hi :)');
  }

  //TODO 6      function
  onKeyUp(userInput:string) {
    this.data.text = userInput;
  }

}
