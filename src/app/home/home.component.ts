import { Component } from '@angular/core';
import {Route, Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {
  }


  click(){
    this.router.navigate(['/new-transaction']).catch(err => console.error(err));
  }
  click1(){
    this.router.navigate(['/transaction-report']).catch(err => console.error(err));
  }

}
