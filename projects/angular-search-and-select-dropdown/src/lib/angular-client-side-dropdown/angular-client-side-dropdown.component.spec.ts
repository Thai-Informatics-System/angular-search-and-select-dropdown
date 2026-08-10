import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularClientSideDropdownComponent } from './angular-client-side-dropdown.component';

describe('AngularClientSideDropdownComponent', () => {
  let component: AngularClientSideDropdownComponent;
  let fixture: ComponentFixture<AngularClientSideDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularClientSideDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularClientSideDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
