import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesComponent } from './employees.component';
import { FormsModule } from '@angular/forms';
import { SearchEmployeePipe } from '../search-employee.pipe';
import { FirebaseService } from '../firebase.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe('EmployeesComponent', () => {
  let component: EmployeesComponent;
  let fixture: ComponentFixture<EmployeesComponent>;
  let serviceStub: any;

  beforeEach(async(() => {

    serviceStub = {
      getContent: () => { of('get')}
    }

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [EmployeesComponent, SearchEmployeePipe],
      providers: [{ provide: FirebaseService, useValue: serviceStub }, Router]
    })
      .compileComponents();
    fixture = TestBed.createComponent(EmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
