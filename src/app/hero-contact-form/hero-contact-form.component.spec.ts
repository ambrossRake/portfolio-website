import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroContactFormComponent } from './hero-contact-form.component';

describe('HeroContactFormComponent', () => {
  let component: HeroContactFormComponent;
  let fixture: ComponentFixture<HeroContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
