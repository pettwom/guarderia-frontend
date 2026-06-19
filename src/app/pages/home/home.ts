import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './home.html',

})
export class Home implements OnInit{
  //variables

  //constructor

  //funcion inicial
  ngOnInit(): void {
    console.log ('hola petter')
  }

  // funciones
}
