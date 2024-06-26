import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';


import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})

export class DbzService{

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Karen',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Juan',
      power: 1500,
    },
    {
      id: uuid(),
      name: 'Pedro',
      power: 950,
    },
  ];

  addCharacter(character: Character):void{

    const newCharacter:Character = {
      id: uuid(),...character
    }

    this.characters.push(newCharacter);
  }

  deleteCharacterById(id:string):void{
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
