import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAboutMeComponent } from './hero-about-me.component';

describe('HeroAboutMeComponent', () => {
  let component: HeroAboutMeComponent;
  let fixture: ComponentFixture<HeroAboutMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroAboutMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
