import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "child",
    templateUrl: "./child.component.html"
})
export class ChildComponent {
    //Ключевым моментом здесь является определение входных свойств с помощью 
    //декоратора @Input().Ключевой особенностью таких входных свойств является 
    //то, что они могут устанавливаться извне, например, из главного компонента.
    @Input() name: string;
    @Input() age: number;

    // increase(): void {
    //     this._age++;
    // }

    // @Input()
    // set age(age: number) {
    //     if (age < 0) {
    //         this._age = 0;
    //     } else if (age > 100) {
    //         this._age = 100;
    //     } else this._age = age;
    // }

    // get age(){
    //     return this._age;
    // }

    //example fir @Output
    @Output() onChanged = new EventEmitter<boolean>();
    change(increased) {
        this.onChanged.emit(increased);
    }
}
