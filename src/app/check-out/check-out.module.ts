import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckOutComponent } from './check-out.component';
import { CheckOutRoutingModule } from './check-out-routing.module';

@NgModule({
  imports: [CommonModule, CheckOutRoutingModule],
  declarations: [CheckOutComponent]
})
export class CheckOutModule {}
