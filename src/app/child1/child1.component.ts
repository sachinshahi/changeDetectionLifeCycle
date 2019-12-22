import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterContentChecked, AfterViewChecked  {

  @Input() data: any;
  @Input() secondary: number;
  @Input() http$: Observable<any>;

  constructor() { }

  ngOnInit() {
    console.log('parentchild onInit');
    console.log(this.data);
  }

  ngAfterContentChecked(): void {
    console.log('parentchild after content init checked');
  }

  ngAfterContentInit(): void {
    console.log('parentchild content init');
  }

  ngAfterViewInit(): void {
    console.log('parentchild view Init');
  }


  ngAfterViewChecked(): void {
    console.log('paretnchildd After view checked');
  }

  ngDoCheck(): void {
    console.log('parentchild DoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('parentchild onChanges');
    console.log(changes);
    console.log(this.data);
  }


  test() {
    this.data = {
      counter: this.data.counter - 1
    };
    console.log(this.data);
    console.log('parentchild test');
  }

}
