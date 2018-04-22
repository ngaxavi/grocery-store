import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AdminGuard } from './admin.guard';

@NgModule({
  imports: [AngularFireAuthModule, AngularFirestoreModule],
  providers: [AuthService, AuthGuard, AdminGuard]
})
export class CoreModule {}
