import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee} from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:Employee[];

  constructor(private empService: EmployeeService, private router:Router) { }

  ngOnInit(): void {
   
    this.getEmployees();
  }

  getEmployees(){
    this.empService.getEmployeeList().subscribe(data=>{
      this.employees=data;
    })
  }

  employeeDetails(id: number){
    //route of update employee with the id to be passed, it will route to employee details page
    this.router.navigate(['employee-details',id]);  
  }

  updateEmployee(id: number){
    //route of update employee with the id to be passed, it will route to update employee page
    this.router.navigate(['update-employee',id]);  
  }

  deleteEmployee(id: number){
    //delete employee
    this.empService.deleteEmployeeById(id).subscribe(data=>{
      console.log(data);
    //get remaining employee by reusing getEmployee method
      this.getEmployees();
    })
  }

}
