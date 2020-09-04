import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Component({
  // moduleId: module.id,
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  emps: Observable<any[]>;

  constructor(private my_emps: FirebaseService, private router: Router) { 
    this.emps = this.my_emps.getData();
  }

  ngOnInit() {
  }

  fetchEmployees(){
    this.emps = this.my_emps.getData()
  }

  updateEmployee(key, data){
    this.my_emps.updateRecord(key, data)
  }
  deleteEmployee(key){
    event.stopPropagation()
    this.my_emps.deleteRecord(key)
  }

  seeEmployeeeDetails(key){
    this.router.navigate(['/employee',key])
  }

}