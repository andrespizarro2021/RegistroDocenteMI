import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { Router} from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public Auth:AngularFireAuth,
    public router: Router
    
    ) { }

  isAuthenticated(){
    return this.Auth.currentUser !== null;
  }

  loginUserEmail(email:string, password:string){
        this.Auth.signInWithEmailAndPassword(email, password).then(user =>{
          console.log("Bienvenido" + " " + user.user.email);
          this.router.navigate(['/home']);
        }).catch(err => console.log("No autenticado"+ err.message));
        
    
  }

  logout(){
    this.Auth.signOut().then(() => {
      console.log("Esperamod verte pronto");
      this.router.navigate(['/login']);
    }).catch(err => console.log(err.message));
  }
}
