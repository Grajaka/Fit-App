import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { RegisterComponent } from './pages/register/register.component';
import { PersonasComponent } from './pages/personas/personas.component';
import { HomeComponent } from './pages/home/home.component';
import { PremiumComponent } from './pages/premium/premium.component';

export const routes: Routes = [

  {
    path:'welcome',
    component:WelcomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'edit',
    component:PersonasComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'premium',
    component:PremiumComponent
  },
  {
    path:'**',
    redirectTo: 'welcome'
  }
];
