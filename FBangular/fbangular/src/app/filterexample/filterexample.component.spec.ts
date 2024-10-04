import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterexampleComponent } from './filterexample.component';

describe('FilterexampleComponent', () => {
  let component: FilterexampleComponent;
  let fixture: ComponentFixture<FilterexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterexampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
