import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[expas__dir]',
  exportAs: 'expas'
})
export class ExpAsDirective {

  private counter: number = 0;

  @HostBinding('style.color') myBg: string;
  @HostListener('click', ['$event']) changeColor(event){
    this.setRandomColor();
    this.counter++;
    console.log(this.counter, event.target)
  }

  constructor() {
    setTimeout(_ =>  {
      this.myBg  = 'green';
    }, 2000)
  }

  setRandomColor(){
    this.myBg = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

}
