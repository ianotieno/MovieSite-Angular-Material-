import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actor1Component } from './actor1.component';

describe('Actor1Component', () => {
  let component: Actor1Component;
  let fixture: ComponentFixture<Actor1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Actor1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Actor1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
