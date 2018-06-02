import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, CustomFormsModule, AccountRoutingModule],
  declarations: [LoginComponent, RegisterComponent]
})
export class AccountModule {}
