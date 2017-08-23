import { HeroService } from './hero.service';
import { TestBed, async } from '@angular/core/testing';
import { HEROES } from './mock-heroes';

describe('Service: HeroService', () => {

    it('getHeroes() should return HEROES array', (done: DoneFn) => {
        var service = new HeroService();
        service.getHeroes().then(value => {
            expect(value).toEqual(HEROES);
            done();
        });
    });
}); 
