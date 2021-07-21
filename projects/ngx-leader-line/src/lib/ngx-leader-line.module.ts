import { NgModule } from '@angular/core';
import { NgxLeaderLineComponent } from './ngx-leader-line.component';
import { ConnectToDirective } from './connect-to.directive';
import { DestDirective } from './dest.directive';



@NgModule({
  declarations: [
    NgxLeaderLineComponent,
    ConnectToDirective,
    DestDirective
  ],
  imports: [
  ],
  exports: [
    NgxLeaderLineComponent,
    ConnectToDirective,
    DestDirective
  ]
})
export class NgxLeaderLineModule { }
