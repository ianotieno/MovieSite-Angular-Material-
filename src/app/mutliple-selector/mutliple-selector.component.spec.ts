import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutlipleSelectorComponent } from './mutliple-selector.component';

describe('MutlipleSelectorComponent', () => {
  let component: MutlipleSelectorComponent;
  let fixture: ComponentFixture<MutlipleSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MutlipleSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MutlipleSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
