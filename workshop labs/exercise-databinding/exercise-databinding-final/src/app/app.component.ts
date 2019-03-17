import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentPos: number = 0;
  evalMessage: string = 'Nothing entered yet';
  colorsMsgs: {colorName: string, buttonMsg: string} [] =
  [
    {colorName: 'red', buttonMsg : 'Change to green'},
    {colorName: 'green', buttonMsg : 'Change to yellow'},
    {colorName: 'yellow', buttonMsg : 'Change to blue'},
    {colorName: 'blue', buttonMsg : 'Change to red'},
  ]

  evalInput(event) {
    const strLength = event.target.value.length;
    if (strLength > 10)
      this.evalMessage = "Long string";
    else if (strLength > 5)
      this.evalMessage = "Medium string";
    else if (strLength > 0)
      this.evalMessage = "Entering a string";
    else  
      this.evalMessage = "Nothing entered yet";
  }

  changeImage() {
    this.currentPos++;
    if (this.currentPos > 3)
      this.currentPos = 0;
      
  }
}
