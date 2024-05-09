import { Component } from '@angular/core';
import { PersonasComponent } from '../personas/personas.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [PersonasComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  goTo(url:string){
    window.location.href = url;
  }
}
