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
export class PersonasComponent implements OnInit {

  first: boolean = false;
  oculto: boolean = false;

  ngOnInit() {
    window.onload = function() {
      // document: string = document.getElementById("first").style.display = "none";
    };
  };


  NextWindows():void{
    console.log('Hola mundo');

    this.first = true;
  }

}
