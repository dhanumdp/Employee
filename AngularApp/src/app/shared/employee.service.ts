import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Employee} from './employee.model';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees:Employee[];
  selectedEmployee:Employee;
  
  readonly baseURL = 'http://localhost:3000/employees/update';

  constructor(private http : HttpClient) { }
  postEmployee(emp:Employee)
  {
      return this.http.post('http://localhost:3000/employees/insert',emp);
  }
  
  getEmployeeList()
  {
    return this.http.get('http://localhost:3000/employees/list');
  }

  putEmployee(emp:Employee)
  {
    
    return this.http.put(this.baseURL + `/${emp._id}`,emp);
  }

readonly deleteURL = 'http://localhost:3000/employees/delete'
  deleteEmployee(_id:string)
  {
   
    return this.http.delete(this.deleteURL + `/${_id}`);
  }
 
}
