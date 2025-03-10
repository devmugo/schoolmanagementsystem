import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from './services/auth/auth.service';
import { Subscription } from 'rxjs';

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
  private userSubscription: Subscription | undefined;

  ngOnInit(){
    this.userSubscription = this.authService.currentUser.subscribe(user => {
      this.username = user;
    });   

  }


  logout(): void {
    this.authService.logout();
  }


}
