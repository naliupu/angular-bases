import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  public name: string = "iroman";
  public age: number = 45;

  get  capitalizedName() : string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }


  changeHero(): void{
    this.name = 'Batman';
  }

  changeAge(){
    this.age = 23;
  }

  resetForm(){
    this.name = 'iroman';
    this.age = 45;
  }
}
