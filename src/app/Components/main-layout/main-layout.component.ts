import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { AsideComponent } from '../aside/aside.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [NavbarComponent,AsideComponent,FooterComponent,RouterOutlet,HomeComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
