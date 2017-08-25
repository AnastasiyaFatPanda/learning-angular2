import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//модуль, необходимый для работы с формами html и, в частности, с элементами input. 
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';

@NgModule({
    // другие модули, классы которых необходимы для шаблонов компонентов 
    //из текущего модуля
    imports:      [ BrowserModule, FormsModule ],
    // классы представлений (view classes), которые принадлежат модулю. 
    //Angular имеет три типа классов представлений: компоненты (components),
    //директивы (directives), каналы (pipes)
    declarations: [ AppComponent ],
    //корневой компонент, который вызывается по умолчанию при загрузке приложения
    //Если мы опустим компонент: bootstrap: [ ] или вовсе уберем параметр 
    //bootstrap, то на веб-страницу не будет загружаться представление 
    //из комопонента AppComponent.
    bootstrap:    [ AppComponent ],
    //набор классов представлений, которые должны использоваться в шаблонах 
    //компонентов из других модулей
    exports:      [ ],
    //классы, создающие сервисы, используемые модулем
    providers:    [ ]
})

export class AppModule { }