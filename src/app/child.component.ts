import { Component } from '@angular/core';

@Component ({
    selector: 'child',
    templateUrl: './child.component.html'
})

export class ChildComponent{
    name = 'Anastasiya';
    age = 22; 

    increase() : void {
      this.age++;
    }
}