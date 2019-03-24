import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { EmployeeService } from "src/app/employee/employeeservice/employee.service";
import { ActivatedRoute } from "@angular/router";
import { DepartmentService } from 'src/app/employee/departmentservice/department.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employeecreate',
  templateUrl: './employeecreate.component.html',
  styleUrls: ['./employeecreate.component.css']
})
export class EmployeecreateComponent implements OnInit {
  model: any = {};
  public employeeFormGroup: FormGroup;
  id: number;
  departmentList: any[] = [];

  constructor(private router: Router, private employeeService: EmployeeService, private departmentService: DepartmentService, private route: ActivatedRoute) {

    this.id = this.route.snapshot.params['id'] == undefined ? 0 : +this.route.snapshot.params['id'];

  }

  ngOnInit() {

    this.buildComponent();
    this.bindDepartment();

    if (this.id > 0) {

      this.getEmployeeById();
    }

  }

  buildComponent() {

    this.employeeFormGroup = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      address: new FormControl({ value: '' }, [Validators.minLength(3), Validators.maxLength(1000)]),
      email: new FormControl({ value: '' }, [Validators.required, Validators.email]),
      mobileNo: new FormControl({ value: '' }, [Validators.required, Validators.minLength(7), Validators.maxLength(15), Validators.pattern('[0-9]+')]),
      department: new FormControl('', [Validators.required])
    });

  }


  bindDepartment() {

    this.departmentService.retrieve()
      .subscribe(data => {
        if (data) {
          this.departmentList = data.returnObject;
        }

      },
      error => {

      });
  }


  save() {

    if (this.employeeFormGroup.valid) {

      this.employeeService.save(this.model)
        .subscribe(res => {

          if (res) {
            if (!res.isError) {
              this.router.navigate(['/employeeSearch']);
            }
          }

        });
    }


  }


  getEmployeeById() {

    this.employeeService.retrieveEmployeeById(this.id)
      .subscribe(res => {

        debugger;
        if (res) {
          this.model = res.returnObject;
        }
      })
  }



}
