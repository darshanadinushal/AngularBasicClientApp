import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class EmployeeService {
configUrl = 'http://localhost:5970/api/';

  constructor(private http: HttpClient) { }

      retrieve() {
        const path = this.configUrl + "Employee";
        return this.http.get(path).map((response: any) => {
            return response;
        });
    }

      retrieveEmployeeById(id:number) {
        const path = this.configUrl + "Employee/"+id;
        return this.http.get(path).map((response: any) => {
            return response;
        });
    }

    save(request:any){
        const path = this.configUrl + "Employee";

         return this.http.post(path, request)
            .map((response: any) => {
                return response;
            });
    }

}
