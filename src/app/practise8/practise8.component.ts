import { Component } from '@angular/core';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';

@Component({
  selector: 'app-practise8',
  standalone: true,
  imports: [
    Component1Component,
    Component2Component,
  ],
  templateUrl: './practise8.component.html',
  styleUrl: './practise8.component.scss'
})
export class Practise8Component {

}
