import { CompAComponent } from './comp-a/comp-a.component';
import { Component } from '@angular/core';
import { CompBComponent } from './comp-b/comp-b.component';

@Component({
  selector: 'app-practise8',
  standalone: true,
  imports: [
    CompAComponent,
    CompBComponent
  ],
  templateUrl: './practise8.component.html',
  styleUrl: './practise8.component.scss'
})
export class Practise8Component {

}
