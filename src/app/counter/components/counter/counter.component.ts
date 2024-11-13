import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h3>Count: {{ counter }}</h3>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()">reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `,
})
export class CounterComponent{

  public counter: number = 10;

  increaseBy(valor: number):void{
    this.counter += valor;
  }

  resetCounter(){
    this.counter = 10;
  }
}
