import {
  Component, OnChanges, OnInit,
  ChangeDetectionStrategy, Input, ChangeDetectorRef, SimpleChanges, SimpleChange
} from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-onchange',
  templateUrl: './onchange.component.html',
  styleUrls: ['./onchange.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnchangeComponent implements OnInit, OnChanges {

  @Input() object: { id: number, name: string };
  @Input() string: string;
  @Input() number: number;
  @Input() array: string[];
  @Input() subject: Subject<string[]>;

  subjectResult: string[];

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.subscribeSubject();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('onChange fired');
    console.log('changing', changes);
  }

  subscribeSubject() {
    this.subject.subscribe(stringArray => {
      this.subjectResult = stringArray;
      console.log('subscribe observable without detect changes');
      // TRY IT WITH DETECT CHANGES
      // this.cd.detectChanges();
    });
  }

  onClickRecreateObject() {
    this.object = { id: Math.random(), name: (Math.random() * 100).toString() };
  }

  onClickChangeObjectProperty() {
    this.object.name = `Changed name property only`;
  }

  onClickChangeNumber() {
    this.number = Math.random() * 10000;
  }

  onClickChangeArray() {
    this.array.push(`${Math.random() * 10000} just a push`);
  }

  onClickRecreateArray() {
    this.array = [`This is a new array`];
  }

  onClickChangeString() {
    this.string += this.string;
  }
}
