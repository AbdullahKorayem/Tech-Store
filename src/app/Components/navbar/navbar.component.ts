import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ToAuthenticateUserService } from '../../Services/to-authenticate-user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  isHeLogged: boolean = false;
  constructor(private toAuthenticateUserService: ToAuthenticateUserService) {}
  ngOnInit(): void {
    // this.isHeLogged=this.toAuthenticateUserService.IsLoggedIn()

    this.toAuthenticateUserService.toGetStatus().subscribe((theStatus) => {
      this.isHeLogged = theStatus;
    });
  }
}
