import { Input, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[counter]'
})
export class CounterDirective {

  @Input('counterOf')
  count: number = 0

  constructor(private container: ViewContainerRef, private template:  TemplateRef<Object>) {

   }

   ngOnChanges(changes: SimpleChanges) {
     this.container.clear()
     for(let i=0; i < this.count; i++){
      this.container.createEmbeddedView(this.template, new CounterDirectiveContext(i+1))
     }
   }

}

class CounterDirectiveContext{
  constructor(public $implicit: any){}
}
