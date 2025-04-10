import { Component } from '@angular/core';

@Component({
  selector: 'app-practise5',
  standalone: true,
  imports: [],
  templateUrl: './practise5.component.html',
  styleUrl: './practise5.component.scss'
})
export class Practise5Component {
  title:string='我是標題';
  content:string ='我是內容';
  imgUrl:string ='/img1.jpg'
}
