import { Component, OnInit } from '@angular/core';
import { ToAuthenticateUserService } from '../../Services/to-authenticate-user.service';
import { Router } from '@angular/router';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  isHeLogged: boolean = false;

  constructor(
    private toAuthenticateUserService: ToAuthenticateUserService,
    private router: Router
  ) {}
  ngOnInit(): void {
   this.isHeLogged=this.toAuthenticateUserService.IsLoggedIn()
  }

  

  toLogin(UserEmail: string, UserPassword: string) {
    this.toAuthenticateUserService.logIn(UserEmail, UserPassword);
     this.isHeLogged = this.toAuthenticateUserService.IsLoggedIn();
    this.router.navigateByUrl(`/Home`);
  }

  toLogOut() {
    this.toAuthenticateUserService.logOut();
     this.isHeLogged = this.toAuthenticateUserService.IsLoggedIn();
  }
}
