import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id:number;
  employee:Employee;

  constructor(private route:ActivatedRoute, private empService:EmployeeService) { }

  ngOnInit(): void {
    //this will required id to be passed and that we will take from route
    //for that we will use activated route
    this.id=this.route.snapshot.params['id'];
    this.employee=new Employee();
    this.empService.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
    })
  }

}
