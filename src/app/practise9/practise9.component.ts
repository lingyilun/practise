import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-practise9',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './practise9.component.html',
  styleUrl: './practise9.component.scss'
})
export class Practise9Component
{

  /**
   * 角色等級
   */
  level = 1;
  /**
   * 角色攻擊力
   */
  atk = 10;
  /**
   * 角色防禦力
   */
  def = 10;
  /**
   * 每個等級增加的攻擊力
   */
  atkPerLevel = 3;
  /**
   * 每個等級增加的防禦力
   */
  defPerLevel = 2;
  /**
   * 由使用者自定義的等級數值
   */
  CustomLevel = 1;

  /**
   * 升級。每次呼叫時，角色等級增加，能力值則根據角色成長點數增加。
   *
   * @param {number} level 要增加的等級，不輸入時預設為1
   */
  public upgrade(level: number = 1): void
  {
    this.level += level;
    this.atk += (this.atkPerLevel * level);
    this.def += (this.defPerLevel * level);
  }

  /**
   * 降級。每次呼叫時，角色等級減少，能力值則根據角色成長點數減少。
   * @param level 要減少的等級，不輸入時預設為1
   */
  public downgrade(level: number = 1): void
  {
    if(this.level <= 1) return;
    this.upgrade(level * (-1));
  }

  /**
   * 由使用者自定義的等級。角色等級會直接設定為目標值，能力值則根據角色成長點數增加。
   * @param level 要設定的等級
   */
  public setLevel(level: number): void
  {
    this.level = level;
    this.atk = 10 + (this.atkPerLevel * (level - 1));
    this.def = 10 + (this.defPerLevel * (level - 1));
  }

  /**
   * 修改等級。
   */
  public editLevel()
  {
    if(this.CustomLevel <= 0)
    {
      alert("等級不得小於 0！");
      return;
    }
    this.setLevel(this.CustomLevel);
    this.CustomLevel = 1;
  }

  /**
   * 重設等級，所有能力都將變回初始值。
   */
  public resetLevel()
  {
    this.level = 1;
    this.atk = 10;
    this.def = 10;
  }

}
