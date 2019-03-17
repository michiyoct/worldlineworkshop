import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stringLog: string[] = [];
  boxValue: string ='';
  buttonMsg: string ='Show list of strings entered';
  showList: boolean = false;

  onSaveString() {
    this.stringLog.push(this.boxValue);
  }

  onToggleListAppear() {
    this.showList = !this.showList;
    if (this.showList) 
      this.buttonMsg = 'Hide list of strings entered';
    else
      this.buttonMsg = 'Show list of strings entered';
  }

}
