import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  employees = this.http.get<Employee[]>('/api/employees');

  public addEmployee(newEmployee: Employee): void {
    this.employees = this.http.post<Employee[]>('/api/employee', newEmployee);
  }

  public deleteEmployee(oldEmployee: Employee): void {
    this.employees = this.http.delete<Employee[]>('/api/employee/'+ oldEmployee.id);
  }

  public updateEmployee(employeeToUpdate: Employee): void {
    this.employees = this.http.put<Employee[]>('/api/employee/' + employeeToUpdate.id, employeeToUpdate);
  }
}
