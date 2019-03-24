import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "src/app/app.component";
import { EmployeesearchComponent } from "src/app/employee/employeesearch/employeesearch.component";
import { EmployeecreateComponent } from "src/app/employee/employeecreate/employeecreate.component";

const routes: Routes = [
  { path: '', component: EmployeesearchComponent},
  { path: 'employeeSearch', component: EmployeesearchComponent},
  { path: 'employeeCreate', component: EmployeecreateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
