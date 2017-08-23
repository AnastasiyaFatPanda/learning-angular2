import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HeroDetailComponent } from './hero-detail.component';

describe('HeroDetailComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroDetailComponent
      ],
      imports: [FormsModule]
    }).compileComponents();
  }));

  it('should create the app for HeroDetailComponent', async(() => {
    const fixture = TestBed.createComponent(HeroDetailComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});