import { Component , Input ,OnInit , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'my-child',
  templateUrl: './child.component.html',
  styleUrls: [ './child.component.css' ]
})
export class ChildComponent implements OnInit {
  name = 'Child';
  @Input() users;
  myusers=[];

  /***emits from child to parent ***/

  childToParent =["Mango","Apple","Banana"];
  @Output() myevent = new EventEmitter();

  ngOnInit() {
   this.myusers = this.users;
  }

  childToParentMethod() {
   this.myevent.emit(this.childToParent);
  }

}
