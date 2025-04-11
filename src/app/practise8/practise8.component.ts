import { Component } from '@angular/core';
import { FirstComponent } from '../first/first.component';
import { SecondComponent } from '../second/second.component';

@Component({
  selector: 'app-practise8',
  standalone: true,
  imports: [
    FirstComponent,
    SecondComponent,
  ],
  templateUrl: './practise8.component.html',
  styleUrl: './practise8.component.scss'
})
export class Practise8Component {

}
