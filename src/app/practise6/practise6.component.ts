import { Component } from '@angular/core';

@Component({
  selector: 'app-practise6',
  standalone: true,
  imports: [],
  templateUrl: './practise6.component.html',
  styleUrl: './practise6.component.scss'
})
export class Practise6Component {

  // 要觸發方法請解開裡面的方法
  ngOnInit(): void {
    this.practise1();
    this.practise2();
    this.practise3();
    this.practise4();
    this.practise5();
    this.practise6();
    this.practise7();
  }

  // 練習1
  // 試著將1~50打印出來。(for迴圈)
  practise1() {
    let result = []
    for(let i=1 ; i<51 ;i++ ){
      result.push(i)
    }
    console.log(result);
  }

  // 練習2
  // 承接第一題將偶數去除並且打應出來。
  practise2() {
    let result = []
    for(let i=1 ; i<51 ;i++ ){
      if(i%2 !==0){
        result.push(i)
      }
    }
    console.log(result);
  }

  // 練習3
  // 將1~50除以3餘數為2的值打印出來。(for迴圈)
  practise3() {
    let result = []
    for(let i=1 ; i<51 ;i++ ){
      if(i%3 ==2){
        result.push(i)
      }
    }
    console.log(result);
  }

  // 練習4
  // 使用forEach修改方法中的data內容中小王的age為18。(forEach)
  practise4() {
    let data = [
      {
        name: '小明',
        age: 10
      },
      {
        name: '小陳',
        age: 24
      },
      {
        name: '小王',
        age: 16
      }
    ]

    data.forEach((item,index)=>{
      if(item.name =='小王'){
        item.age =18
      }
    })
    console.log(data);

  }

  // 練習5
  // 找出陣列裡的最小值
  practise5() {
    let data = [4, 6, 1, 2, 7, 9, 12, 15, 13];
    console.log( Math.min(...data));

  }

  // 練習6
  // 倒著印出字串
  practise6() {
    let data = '你好我是Allen';
    let newText ='';

    newText=data.split('').reverse().join('')
    console.log(newText);

  }

  // 練習7
  // 將這段文字中的名稱打印出來
  practise7() {
    let data = '我是Allen，你好';
    let name =data.slice(2,7)
    console.log(name);

  }
}
