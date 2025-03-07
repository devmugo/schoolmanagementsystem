import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'school_ms';
  username : string = ""
  isLoginPage = false;

  constructor(private router: Router , private authService: AuthService ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      this.isLoginPage = this.router.url === '/login' || this.router.url === '/';
    });
  }

  ngOnInit(){
    this.username= this.authService.getUserName()

  }


  logout(): void {
    this.authService.logout();
  }


}
