import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name : string = "Karen";
  public age  : number = 27;

  get capitalizeName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${ this.name } - ${ this.age }`;
  }

  chageHero():void{
    this.name = "Yulier";
  }

  chageAge():void{
    this.age = 28;
  }

  reset():void{
    this.name = "Karen";
    this.age = 27;
  }
}
