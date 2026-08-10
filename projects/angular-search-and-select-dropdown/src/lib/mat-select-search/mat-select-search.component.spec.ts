import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSelect } from '@angular/material/select';
import { Subject } from 'rxjs';

import { MatSelectSearchComponent } from './mat-select-search.component';
import { AngularSearchAndSelectDropdownModule } from '../angular-search-and-select-dropdown.module';

describe('MatSelectSearchComponent', () => {
  let component: MatSelectSearchComponent;
  let fixture: ComponentFixture<MatSelectSearchComponent>;

  beforeEach(async () => {
    // The component is designed to live inside a mat-select and injects it
    // directly. Standing up a real MatSelect just to smoke-test creation would
    // pull in the whole overlay stack, so stub the members ngOnInit touches.
    const matSelectStub = {
      panelClass: undefined as unknown,
      multiple: false,
      openedChange: new Subject<boolean>(),
      valueChange: new Subject<unknown>(),
    };

    await TestBed.configureTestingModule({
      imports: [AngularSearchAndSelectDropdownModule],
      providers: [{ provide: MatSelect, useValue: matSelectStub }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatSelectSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
