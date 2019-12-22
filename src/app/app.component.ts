import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

@Component(N
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  http: Subject<any> = new Subject<any>();
  http$ =  this.http.asObservable();
  data = {
    counter: 0
  };
  secondary = 1;

  constructor(private  httpClient: HttpClient) {

    this.httpClient.get('http://localhost:3000/datas').subscribe(d => {
      console.log('data1');
    });
  }

  increment() {
    this.data.counter++;
  }

  test() {
    console.log('parent test');
  }


  ngDoCheck() {
    console.log('parent component do check');
  }

  changeSec() {
    this.secondary++;
  }

  fetch() {
    //this.http$ = this.httpClient.get('http://localhost:3000/datas');
//    this.http.next(3);

    this.httpClient.get('http://localhost:3000/datas').subscribe(d => {
      console.log('data1');
    });
  }
}

