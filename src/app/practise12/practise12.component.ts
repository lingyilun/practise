import { Component } from '@angular/core';

@Component({
  selector: 'app-practise12',
  standalone: true,
  imports: [],
  templateUrl: './practise12.component.html',
  styleUrl: './practise12.component.scss'
})
export class Practise12Component {

  userArray = [
    {
      userName: '玩家A',
      lev: 10,
      props: [
        {
          propsName: '蘑菇',
          amount: 5
        },
        {
          propsName: '金幣',
          amount: 15
        }
      ]
    },
    {
      userName: '玩家B',
      lev: 15,
      props: [
        {
          propsName: '龜殼',
          amount: 1
        },
        {
          propsName: '砲彈',
          amount: 15
        }
      ]
    }
  ]

  // 練習1 把把9是在陣列資料中哪個位置console.log打印出來
  practise1() {
    let arrayData = [10,20,3,5,8,9,23,657,123,67];
  }
}
