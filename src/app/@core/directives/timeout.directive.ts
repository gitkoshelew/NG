import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[timeout--dir]'
})
export class TimeoutDirective {

  private counter: number = 0;

  @HostBinding('style.backgroundColor') myBg: string;
  @HostListener('click', ['$event']) changeColor(event){
    this.myBg = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.counter++;
    console.log(this.counter, event.target)
  }

  constructor() {
    setTimeout(_ =>  {
      this.myBg  = 'green';
    }, 2000)
  }

}
