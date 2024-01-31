import { Routes } from '@angular/router';
import { CardComponent } from './Components/card/card.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { LoginComponent } from './Components/login/login.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { HomeComponent } from './Components/home/home.component';
import { authenticationsGuard } from './Guards/authentications.guard';

export const routes: Routes = [
  //first match wins
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'Home',
        pathMatch: 'full',
      },
      {
        path: 'Home',
        component: HomeComponent,
        canActivate: [authenticationsGuard],
      },
      { path: 'About', component: AboutUsComponent },
      { path: 'Contact', component: ContactUsComponent },
      { path: 'Details/:ID', component: ProductDetailsComponent },
      { path: 'login', component: LoginComponent },
    ],
  },
  { path: 'login', component: LoginComponent },

  { path: '**', component: NotFoundComponent },
];

// export const routes: Routes = [
//     //first match wins
//     {path:'',redirectTo:'Home',pathMatch:'full'},
//     {path:'Home',component:CardComponent},
//     {path:'About',component:AboutUsComponent},
//     {path:'Contact',component:ContactUsComponent},
//     {path:'**',component:NotFoundComponent},

// ];
