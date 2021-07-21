import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  color: string = "#3B90FD";
  demoSource: any;

  step2Code = `@NgModule({
  ...,
  imports: [
    ...,
    NgxLeaderLineModule
  ]
})
export class AppModule { }`;

  step3Code = `<div [ldrConnectTo]="dest"></div>
<div #dest></div>`;
  step4Code = `<my-component [ldrConnectTo]="dest"></my-component>
<my-another-component #dest="ldrDest" ldrDest></my-another-component>`;
  step5Code = `<div [ldrConnectTo]="dest" [ldrColor]="color" ldrDash="true" ldrStartSocket="bottom"></div>
<div #dest></div>`;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    const url = 'https://raw.githubusercontent.com/antonsimola/ngx-leader-line/master/projects/ngx-leader-line-demo/src/app/app.component.html';
    this.httpClient.get(url, {responseType: 'text'}).subscribe(
      content => {
        this.demoSource = content;
      }
    );
  }
}
