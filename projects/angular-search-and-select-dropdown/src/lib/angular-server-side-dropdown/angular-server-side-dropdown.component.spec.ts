import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularServerSideDropdownComponent } from './angular-server-side-dropdown.component';

describe('AngularServerSideDropdownComponent', () => {
  let component: AngularServerSideDropdownComponent;
  let fixture: ComponentFixture<AngularServerSideDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularServerSideDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularServerSideDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
