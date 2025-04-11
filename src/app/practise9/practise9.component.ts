import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-practise9',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './practise9.component.html',
  styleUrl: './practise9.component.scss'
})
export class Practise9Component {
  level: number = 1;
  attack: number = 10;
  defense: number = 10;
  inputLevel!: number;

  reset() {
    this.level = 1;
    this.attack = 10;
    this.defense = 10;
  }

  uplevel() {
    this.level = this.level + 1
    this.attack = this.attack * 3
    this.defense = this.defense * 2
  }

  downlevel() {
    if (this.level != 1 && this.attack != 10 && this.defense != 10) {
      this.level = this.level - 1
      this.attack = this.attack / 3
      this.defense = this.defense / 2
    }
  }

  changeLevel() {
    this.reset()
    for (let i = 1; i < this.inputLevel; i++) {
      this.uplevel();
    }
  }

}
