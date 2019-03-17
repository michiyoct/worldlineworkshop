import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../Employee';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  @Input() public myRole: string;
  @Output() private createdEmployee : EventEmitter<Employee>;

  public employeeForm: FormGroup;
  public myEmployee: Employee = new Employee('',0,'','','','');

  constructor (private fb: FormBuilder) {
    this.createdEmployee = new EventEmitter<Employee>();
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      age: [0, [Validators.required, Validators.min(20),Validators.max(80)]],
      email: ['', [Validators.required, Validators.email]],
      os: ['linux', Validators.required],
      languages: ['java', [Validators.required, Validators.minLength(4)]],
    });
  }

  ngOnInit() {

  }

  createEmployee() {

    this.myEmployee = Object.assign({},this.employeeForm.value);
    this.myEmployee.role = this.myRole;
    if (this.employeeForm.valid)
      this.createdEmployee.emit(this.myEmployee);
    else
      alert("One of the form fields is invalid.\n Please correct");    
  }

}
