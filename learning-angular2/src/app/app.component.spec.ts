import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule }  from '@angular/forms'; // <-- NgModel lives here
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AppComponent } from './app.component';
import { HeroService } from './hero.service';
import { tick } from '@angular/core/testing';
import { fakeAsync } from '@angular/core/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent // declare the test component
      ],
      imports: [FormsModule]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    console.log(compiled.querySelector('h1').textContent);
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));

  // The test for the AppComponent class which calls onSelect
  // with Hero instance and then checks selectedHero property
  // to make sure the hero is set correctly
  it('should create \'onSelect\'', async(() => {
    var hero = { 
      id: 11,
      name: 'Mr. Nice'
    };
    let app = new AppComponent(new HeroService());
    console.log(app);
    app.onSelect(hero);
    expect(app.selectedHero).toEqual(hero);
  }));

  // The test checks whether the values from the text field
  // match the value from the list when the data is changed
  it('written data should be mathched with the displayed data', fakeAsync(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    tick();
    const newName = 'AKakura';
    const compiled = fixture.debugElement.nativeElement;
    const b = fixture.debugElement.nativeElement;
    fixture.detectChanges();

    //click on the first element in the list
    compiled.querySelector('ul.heroes li').click();
    //checks data from the list and textBox
    fixture.detectChanges();
    expect(compiled.querySelector('ul.heroes li').textContent).toContain(b.querySelector('input').getAttribute('ng-reflect-model'));

    //set a new name in the textBox
    b.querySelector('input').value = newName;
    b.querySelector('input').dispatchEvent(new Event('input'));
    fixture.detectChanges();

    //checks data from the list and textBox
    expect(compiled.querySelector('ul.heroes li').textContent).toContain(newName);
  }));
});