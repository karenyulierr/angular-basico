import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesName: string[] =['Karen', 'Yulier','Rodriguez', 'Castillo'];
  public deleteHero?:string;

  removerLastHero():void {
     this.deleteHero = this.heroesName.pop();
  }

}
