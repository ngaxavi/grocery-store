import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [CommonModule, FormsModule, CustomFormsModule, AccountRoutingModule, SharedModule],
  declarations: [LoginComponent, RegisterComponent]
})
export class AccountModule {}
