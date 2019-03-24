import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DepartmentService {

  configUrl = 'http://localhost:5970/api/';

  constructor(private http: HttpClient) {


   }

   retrieve() {
    const path = this.configUrl + "Department";
    return this.http.get(path).map((response: any) => {
        return response;
    });
   }

}
