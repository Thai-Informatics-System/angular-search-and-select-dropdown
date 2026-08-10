import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSearchAndSelectDropdownComponent } from './angular-search-and-select-dropdown.component';

describe('AngularSearchAndSelectDropdownComponent', () => {
  let component: AngularSearchAndSelectDropdownComponent;
  let fixture: ComponentFixture<AngularSearchAndSelectDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularSearchAndSelectDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularSearchAndSelectDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
