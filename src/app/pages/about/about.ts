import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-about',
  standalone:true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './about.html',
})
export class About implements OnInit{
  ngOnInit(): void {
    console.log('petter')
  }
}
