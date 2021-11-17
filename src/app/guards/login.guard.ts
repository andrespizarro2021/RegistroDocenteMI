import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router} from '@angular/router'
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private authService:AuthService,
    private router:Router
    ){}
  
    canActivate() {       
      let userAuth = this.authService.isAuthenticated();
      if(userAuth){
        console.log("Autenticado !!!");
        return true;
      }
      console.log("No autenticado");
      this.router.navigate(['/login']);
      return false; 
      

      }
    
    

  
}


    
