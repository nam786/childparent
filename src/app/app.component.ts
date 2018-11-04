import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  /***This object will be shown on child component***/
  users = ["Kevlin","Appy","Elsa"];

  setEmittedValueFromChild = "";


  setEmittedEvent(value: any) {
    

  }


}
