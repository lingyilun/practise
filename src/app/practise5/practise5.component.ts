import { Component } from '@angular/core';

@Component({
  selector: 'app-practise5',
  standalone: true,
  imports: [],
  templateUrl: './practise5.component.html',
  styleUrl: './practise5.component.scss'
})
export class Practise5Component {
  title: string = "我是標題";
  content: string = "我是內容";
  img: string = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ3Hv6iGG5mrI76aruo7gRz7BTVzMs1SV2wo6hi-ohzY7bF6bxFCYLTqNsCO8GdB8jt2lHehNqcpDfRNYEJ-utWtQ"
}
