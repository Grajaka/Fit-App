import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { PersonasComponent } from './pages/personas/personas.component';
import { HomeComponent } from './pages/home/home.component';
import { PremiumComponent } from './pages/premium/premium.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WelcomeComponent, PersonasComponent, HomeComponent, PremiumComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  goTo(url:string){
    window.location.href = url;
  }
}
