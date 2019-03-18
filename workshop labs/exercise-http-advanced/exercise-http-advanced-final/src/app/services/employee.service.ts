import { Injectable } from '@angular/core';
import { Employee } from '../Employee';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError as ObservableThrow } from 'rxjs';
import { of as ObservableOf } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeList: Employee[];

  constructor(private http:HttpClient) { 
    this.employeeList = [];
  }
  
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('/api/employee');
  }

  addEmployee(employee: Employee): Observable<any> {
    return this.http.post('/api/employee', employee);
  }

}
