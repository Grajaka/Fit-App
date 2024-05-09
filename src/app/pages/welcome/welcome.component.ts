import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [LoginComponent, RegisterComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  title= 'Fit-App'

  goTo(url:string){
    window.location.href = url;
  }
}
