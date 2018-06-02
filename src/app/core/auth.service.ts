import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { User } from '@shared/models/user';

@Injectable()
export class AuthService {
  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.user$ = afAuth.authState.switchMap(user => {
      if (user) {
        return this.afs.doc<User>(`/users/${user.uid}`).valueChanges();
      } else {
        return Observable.of(null);
      }
    });
  }

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.user$ !== null;
  }

  // Returns current user
  get currentUser(): Observable<User> {
    return this.authenticated ? this.user$ : null;
  }

  // // Returns current user UID
  // get currentUserId(): string {
  //   return this.authenticated ? this.user$.map(user => user.uid).switchMap();
  // }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider: firebase.auth.AuthProvider) {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    return new Promise((resolve, reject) => {
      this.afAuth.auth
        .signInWithPopup(provider)
        .then(credential => this.backToPreviousUrl(credential.user))
        .catch(error => reject(error));
    });
  }

  //// Email/Password Auth ////
  emailSignUp(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  emailLogin(email: string, password: string) {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    return new Promise((resolve, reject) => {
      this.afAuth.auth
        .signInWithEmailAndPassword(email, password)
        .then(credential => this.backToPreviousUrl(credential.user))
        .catch(error => reject(error));
    });
  }

  //// Sign Out ////
  logout(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

  backToPreviousUrl(user: User) {
    if (user) {
      // save the user
      this.updateUserData(user);
      const returnUrl = localStorage.getItem('returnUrl') || '/';
      if (returnUrl !== '/') {
        localStorage.removeItem('returnUrl');
      }
      this.router.navigateByUrl(returnUrl);
    }
  }

  /////// Abilities and Roles Authorization /////
  ////// Assign roles to an ability method ///
  hasAdminRole(user: User): boolean {
    const allowedRoles = ['admin'];
    return this.checkAuthorization(user, allowedRoles);
  }

  // determines if user has matching role
  private checkAuthorization(user: User, allowedRoles: string[]): boolean {
    if (!user) {
      return false;
    }
    for (const role of allowedRoles) {
      if (user.roles[role]) {
        return true;
      }
    }
    return false;
  }

  updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`/users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      roles: {
        user: true
      }
    };

    return userRef.set(data, { merge: true });
  }
}
