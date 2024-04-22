import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [NgIf],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent {

  first: boolean = true;
  second: boolean = false;
  third: boolean = false;
  four: boolean = false;
  five: boolean = false;
  // oculto: boolean = false;

  NextWindows(data: string){
     switch(data){
      case 'first':
        this.first = false;
        this.second = true;
        break;
      case 'second':
        this.second = false;
        this.third = true;
        break;
      case 'third':
        this.third = false;
        this.four= true
        break;
      case 'four':
        this.four = false;
        this.five= true
        break;
     }
  }
  BackWindows(data: string){
    switch(data){
     case 'first':
       this.first = true;
       this.second = false;
       break;
     case 'second':
       this.second = true;
       this.third = false;
       break;
     case 'third':
       this.third = true;
       this.four= false
       break;
     case 'four':
       this.four = true;
       this.five= false
       break;
    }
  }
  goTo(url:string){
    window.location.href = url;
  }
}
