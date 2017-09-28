import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  object = { id: 1, name: 'initial object name' };
  string = 'Initial string value';
  number = 999;
  array = [`string array value 1`, `string array value 2`];
  subjectArray = ['o', 'b', 'i'];
  subject: Subject<string[]>;

  constructor() {
    this.subject = new Subject<string[]>();
  }

  onClickEmitSubject() {
    this.subjectArray.push(Math.random().toString());
    this.subject.next(this.subjectArray);
  }

  onClickRecreateObject() {
    this.object = { id: 1, name: 'changed in appcomponent' };
  }

  onClickChangeObjectProperty() {
    this.object.name = `change name in appcomponent`;
  }

  onClickChangeNumber() {
    this.number = 1337;
  }

  onClickChangeArray() {
    this.array.push(`I won't update onchange component`);
  }

  onClickRecreateArray() {
    this.array = [...this.array, `I DO CHANGE ONCHANGE COMPONENT`];
  }

  onClickChangeString() {
    this.string += 'hello from app component';
  }
}
