import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(

    private authService: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {

  }
  logOut(){
    console.log('Logout!');
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
