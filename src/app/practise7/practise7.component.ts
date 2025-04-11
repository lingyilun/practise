import { Component } from '@angular/core';

@Component({
  selector: 'app-practise7',
  standalone: true,
  imports: [],
  templateUrl: './practise7.component.html',
  styleUrl: './practise7.component.scss'
})
export class Practise7Component {

  // 要觸發方法請解開裡面的方法
  ngOnInit(): void {
    this.practise1();
    this.practise2();
    this.practise3();
    this.practise4();
  }

  // 練習1
  // 計算Allen有200元購買一個漢堡(50)跟三個薯條(40)後剩多少錢
  practise1() {
    let allenMoney = 200;
    let hamburger = 50;
    let fries = 40;
    let answer = allenMoney - hamburger - fries * 3;
    console.log(answer);
  }

  // 練習2
  // 計算Allen有5000元購買十個漢堡(50)跟十個薯條(40)，因為有會員卡所以可以打九折，最後剩多少錢
  practise2() {
    let allenMoney = 5000;
    let hamburger = 50;
    let fries = 40;
    let answer = allenMoney - (hamburger * 10 + fries * 10) * 0.9;
    console.log(answer);
  }

  // 練習3
  // 用程式判斷誰有達成VIP資格(累積花費200以上)
  practise3() {
    let jsonData = [
      {
        userName: 'Allen',
        payMoney: 500
      },
      {
        userName: 'Ben',
        payMoney: 20
      },
      {
        userName: 'Eric',
        payMoney: 120
      }
    ]

    for (let i = 0; jsonData[i].payMoney > 200; i++) {
      console.log(jsonData[i].userName);
    }
  }

  // 練習4
  // 寫一個可以計算BMI的計算程式
  practise4() {
    // 身高輸入在這裡
    let height = 165;
    // 體重輸入在這裡
    let weight = 65;
    let BMI = weight / ((height/100)*(height/100));

    if(BMI < 18.5){
      console.log(BMI + '過輕')
    }
    else if(BMI > 18.5 && BMI < 24.9){
      console.log(BMI + '正常')
    }
    else if(BMI > 25.0 && BMI < 29.9){
      console.log(BMI + '過重')
    }
    else if(BMI >= 30){
      console.log(BMI + '肥胖')
    }
  }

}
