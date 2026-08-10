import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { AngularServerSideDropdownComponent } from './angular-server-side-dropdown.component';
import { AngularSearchAndSelectDropdownModule } from '../angular-search-and-select-dropdown.module';

describe('AngularServerSideDropdownComponent', () => {
  let component: AngularServerSideDropdownComponent;
  let fixture: ComponentFixture<AngularServerSideDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Import the library module rather than declaring the component alone, so
      // its child components and Material dependencies resolve.
      imports: [AngularSearchAndSelectDropdownModule],
      providers: [provideHttpClient(), provideHttpClientTesting()]
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
