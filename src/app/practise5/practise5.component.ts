import { Component } from '@angular/core';

@Component({
  selector: 'app-practise5',
  standalone: true,
  imports: [],
  templateUrl: './practise5.component.html',
  styleUrl: './practise5.component.scss'
})
export class Practise5Component
{
  /** 用於h1標籤的字串 */
  h1_text: string = "我是標題";
  /** 用於h3標籤的字串 */
  h3_text: string = "下面是動物森友會的各種小可愛們";
  /** 圖片連結 */
  img_src: string = "/littlelamb_mero/AnimalCrossing Rosie Pixiv 01.jpg"
}
