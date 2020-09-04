import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  emp;
  update:boolean = false
  id;

  constructor(private route: ActivatedRoute, private my_emps: FirebaseService, private router: Router) { 
    this.update = route.snapshot.params['update']
    
    this.id = this.update = route.snapshot.params['key']

    if (this.update) {
      my_emps.getSingleObject(this.id).snapshotChanges().subscribe(data => {
        this.emp = {
          name: data.payload.child('name').val(),
          age: data.payload.child('age').val(),
          gender: data.payload.child('gender').val(),
        }
      })
    } else {
      this.emp = {
        name: "",
        age: '',
        gender: ''
      }
    }
  }

  addEmployee(){
    let obj = this.my_emps.pushData(this.emp).then(key => {
      alert("Employee added")
      
      let router: Router
      this.router.navigate(['/employees'])
    })
    .catch(error => {
      alert('error')
    })
  }

  updateEmployee(){
    this.my_emps.updateRecord(this.id,this.emp).then(data => {
      alert('Employee updated!!')

      let router: Router
      this.router.navigate(['/employee',this.id])
    })
  }

  ngOnInit() {
    
  }

}
