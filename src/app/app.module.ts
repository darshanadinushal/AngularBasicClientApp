import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from "src/app/employee/employeeservice/employee.service";
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from "@angular/forms";
import { EmployeesearchComponent } from './employee/employeesearch/employeesearch.component';
import { EmployeecreateComponent } from './employee/employeecreate/employeecreate.component';
import { ReactiveFormsModule } from "@angular/forms";
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select'
import { DepartmentService } from 'src/app/employee/departmentservice/department.service';



@NgModule({
  declarations: [
    AppComponent,
    EmployeesearchComponent,
    EmployeecreateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [EmployeeService,DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
