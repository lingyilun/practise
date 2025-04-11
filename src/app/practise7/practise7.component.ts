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
    console.log('練習1')
    let allenMoney = 200;
    let hamburger = 50;
    let fries = 40;
    let answer = (allenMoney - (hamburger + (fries * 3)))
    console.log(answer);

  }

  // 練習2
  // 計算Allen有5000元購買十個漢堡(50)跟十個薯條(40)，因為有會員卡所以可以打九折，最後剩多少錢
  practise2() {
    console.log('練習2')
    let allenMoney = 5000;
    let hamburger = 50;
    let fries = 40;
    let vip = (price: number) => price * 0.9;
    let answer = allenMoney - vip((hamburger * 10) + (fries * 10));
    console.log(answer);
  }

  // 練習3
  // 用程式判斷誰有達成VIP資格(累積花費200以上)
  // data.forEach((item, index, array) => {
  //   if (item.name == '小王') {
  //     item.age = 18;
  //   }
  practise3() {
    console.log('練習3')
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
    let answer = [];
    for (let data of jsonData) {
      if (data.payMoney >= 200) {
        answer.push(data.userName);
      }
    }
    console.log(answer);
    //下面這樣寫也可以
    // jsonData.forEach(user => {
    //   if (user.payMoney >= 200) {
    //     console.log(`${user.userName} 是 VIP`);
    //   } else {
    //     console.log(`${user.userName} 不是 VIP`);
    //   }
    // });
  }


  // 練習4
  // 寫一個可以計算BMI的計算程式
  practise4() {
    // console.log('練習4')
    // // 身高輸入在這裡
    // let weight = 65;
    // // 體重輸入在這裡
    // let height = 165;
    // let BMI = weight / ((height /100)*(height /100));
    // let level = '';
    // if(BMI < 18.5)level = '過輕';
    // else if (BMI >=18.5 && BMI < 24 )level = '正常';
    // else if (BMI >=24 && BMI < 27 )level = '體重過重';
    // if(BMI >= 27)level = '肥胖';
    // console.log(level)

    //上面下面兩種寫法都可以

    console.log('練習4');
    // 身高輸入在這裡（單位：公分）
    let height = 165;
    // 體重輸入在這裡（單位：公斤）
    let weight = 65;
    // 套入 BMI 公式
    let bmi = weight / ((height /100)*(height /100));
    console.log(`你的BMI是：${bmi.toFixed(2)}`);
    // 判斷 BMI 等級
    if (bmi < 18.5) {
      console.log('體重過輕');
    } else if (bmi < 24) {
      console.log('正常');
    } else if (bmi < 27) {
      console.log('過重');
    } else {
      console.log('肥胖');
    }
  }
}
