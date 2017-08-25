import { Component } from '@angular/core';
     
export class Item{
    purchase: string;
    done: boolean;
    price: number;
     
    constructor(purchase: string, price: number) {
        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
} 

//чтобы определить AppComponent как компонент, необходимо прямо 
//перед его описанием ->
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//Чтобы класс мог использоваться в других модулях, 
//он определяется с ключевым словом export.
export class AppComponent { 
   // name = 'Anastasiya';
   // age = 22;

    items: Item[] = 
    [
        { purchase: "Хлеб", done: false, price: 15.9 },
        { purchase: "Масло", done: false, price: 60 },
        { purchase: "Картофель", done: true, price: 22.6 },
        { purchase: "Сыр", done: false, price:310 }
    ];

    addItem(text: string, price: number): void {
         
        if(text==null || text==undefined || text.trim()=="")
            return;
        if(price==null || price==undefined)
            return;
        this.items.push(new Item(text, price));
    }
<<<<<<< HEAD

    // increase() : void {
    //   this.age++;
    // }
=======
}