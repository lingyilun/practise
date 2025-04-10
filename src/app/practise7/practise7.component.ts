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
    console.clear();
    this.practise1();
    this.practise2();
    this.practise3();
    this.practise4();
  }

  // 練習1
  // 計算Allen有200元購買一個漢堡(50)跟三個薯條(40)後剩多少錢
  practise1() {
    console.log("【第一題】");
    let allenMoney = 200;
    let hamburger = 50;
    let fries = 40;
    console.log(allenMoney - hamburger - fries*3);
  }

  // 練習2
  // 計算Allen有5000元購買十個漢堡(50)跟十個薯條(40)，因為有會員卡所以可以打九折，最後剩多少錢
  practise2() {
    console.log("【第二題】");
    let allenMoney = 5000;
    let hamburger = 50;
    let fries = 40;
    console.log(allenMoney - (hamburger*10 + fries*10) * 0.9);
  }

  // 練習3
  // 用程式判斷誰有達成VIP資格(累積花費200以上)
  practise3() {
    console.log("【第三題】");
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
    let vips: {userName: string, payMoney: number}[] = []
    vips = jsonData.filter(item => {
      return item.payMoney >= 200;
    })
    for(let vip of vips)
      console.log(vip.userName);
  }

  // 練習4
  // 寫一個可以計算BMI的計算程式
  practise4() {
    console.log("【第四題】");
    // 身高輸入在這裡
    let height = 165;
    // 體重輸入在這裡
    let weight = 65;
    let bmi = weight / (Math.pow(height/100, 2));
    let result = "";
    if(bmi >= 0 && bmi < 18.5)
      result = "過輕";
    else if(bmi >= 18.5 && bmi < 24)
      result = "標準";
    else if(bmi >= 24 && bmi < 27)
      result = "過重";
    else
      result = "肥胖";

      console.log("身高：" + height + "cm，體重：" + weight + "kg");
      console.log("BMI為：" + bmi.toFixed(2) + "，判定為" + result);
  }
}
