import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Iroman', 'Hulk', 'She Hulk', 'Thor'];
  public deleteHero?: string;

  removeLastHeroe(): void{
    // this.heroNames.shift();//Remueve el primer elemento y lo regresa.
     this.deleteHero = this.heroNames.pop();//Remueve el ultimo elemento y lo regresa.
  }
}
