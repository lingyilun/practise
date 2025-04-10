import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practise11',
  standalone: true,
  imports: [],
  templateUrl: './practise11.component.html',
  styleUrl: './practise11.component.scss'
})
export class Practise11Component {

  constructor(private router: Router) {}

  go11_1() {
    this.router.navigate(['/practise11/practise11_1'])
  }
}
