import { Component } from '@angular/core';

@Component({
  selector: 'app-practise26',
  standalone: true,
  imports: [],
  templateUrl: './practise26.component.html',
  styleUrl: './practise26.component.scss'
})
export class Practise26Component {
  chartData = [
    {
      id: '1',
      labels: ['1月', '2月', '3月'],
      label: '月銷售',
      data: [30, 20, 40],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
      ]
    },
    {
      id: '2',
      labels: ['化妝品', '乳液', '精華液'],
      label: '銷售內容',
      data: [3000, 120, 240],
      backgroundColor: [
        'rgb(0, 89, 255)',
        'rgb(58, 63, 33)',
        'rgb(255, 0, 0)',
      ]
    },
  ]
}
