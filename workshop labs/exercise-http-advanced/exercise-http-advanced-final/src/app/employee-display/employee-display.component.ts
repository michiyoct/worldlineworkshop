import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../Employee';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-employee-display',
  templateUrl: './employee-display.component.html',
  styleUrls: ['./employee-display.component.css']
})
export class EmployeeDisplayComponent implements OnInit {
  selectedEmployee: Employee;
  employeeList$: Observable<Employee[]>;

  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeList$ = this.employeeService.getEmployees();
  }

  onSelectEmployee(pos: number) {
    console.log(pos);
    this.employeeList$.subscribe(
      (employees) => {
        this.selectedEmployee = employees[pos];
        console.log(employees[pos]);
        console.log("asdfasdf");
      });

  }

}
