import { Component } from '@angular/core';

@Component({
  selector: 'app-practise33',
  standalone: true,
  imports: [],
  templateUrl: './practise33.component.html',
  styleUrl: './practise33.component.scss'
})
export class Practise33Component {
  jsonData = {
    title: '重組資料練習',
    content: '練習將原先的josn資料格式重新組合',
    hint: '需要去思考要怎麼抓取使用者填寫的內容，並在最後點擊按鈕後將其資料打包',
    userContent: [
      {
         questName: '姓名'
      },
      {
         questName: '電話'
      },
      {
         questName: '年紀'
      }
    ]
  }
}
