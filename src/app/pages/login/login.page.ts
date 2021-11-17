import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email:string;
  private password:string;
  constructor(
    private authService:AuthService,
    private router: Router)
  { }

  ngOnInit() {
  }
  loginEmail(){
    this.authService.loginUserEmail(this.email, this.password);
    
    console.log(this.email);
    
    
  } 
}
