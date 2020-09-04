import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../firebase.service';

import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  emp: Observable<any>;
  id;
  public imgs = ['assets/images/img_avatar1.png','assets/images/img_avatar5.png']

  constructor(private route: ActivatedRoute, private obj: FirebaseService, private router: Router) { 
    this.id = route.snapshot.params['key']
    this.emp = obj.getSingleObject(this.id).valueChanges()
  }

  goUpdate(){
    this.router.navigate(['/employee',this.id,true])
  }

  ngOnInit() {
    
  }

}
