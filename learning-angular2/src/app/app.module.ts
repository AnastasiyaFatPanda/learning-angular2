import { AppComponent }  from './app.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],

  imports: [
    BrowserModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],

  bootstrap: [ 
    AppComponent
  ]
})

export class AppModule { }