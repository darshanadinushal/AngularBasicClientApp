import { Component, OnInit } from '@angular/core';
import { PageChangeEvent, GridDataResult, DataStateChangeEvent } from "@progress/kendo-angular-grid/dist/es2015";
import { State } from "@progress/kendo-data-query/dist/npm/state";
import { process } from '@progress/kendo-data-query';
import { Router } from "@angular/router";
import { EmployeeService } from "src/app/employee/employeeservice/employee.service";


@Component({
  selector: 'app-employeesearch',
  templateUrl: './employeesearch.component.html',
  styleUrls: ['./employeesearch.component.sass']
})
export class EmployeesearchComponent implements OnInit {

  public gridData: GridDataResult;

  public model: any[];

  public state: State = {
    skip: 0,
    take: 2
  };

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {

    this.getEmployeeList();

  }

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(this.model, this.state);
  }


  private getEmployeeList() {

    this.employeeService.retrieve()
      .subscribe((res => {

        if (res) {
          debugger;
          this.model = res.returnObject;
          this.gridData = process(this.model, this.state);
        }
      }));

  }

  editEmployee(item: any) {
    debugger;
    this.router.navigate(['/employeeCreate', { id: item.id, isView: false }]);
  }

  addEmployee() {
    this.router.navigate(['/employeeCreate']);
  }

}
