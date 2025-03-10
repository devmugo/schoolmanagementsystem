import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {  

  constructor( private authService : AuthService ,  private router: Router){} 


  username : string = ""
  password : string = ""  
  error : string = ""

  onsubmit() {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        this.authService.setToken(response.token);               
        window.location.href = '/dashboard';
       
        

      },
      error: (err) => {
       this.error= " Invalid username or password "
      }
    });
  }
  



}
