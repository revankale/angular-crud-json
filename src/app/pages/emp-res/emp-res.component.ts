import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-res',
  templateUrl: './emp-res.component.html',
  styleUrls: ['./emp-res.component.css']
})
export class EmpResComponent implements OnInit {


  department: any[] = [];

  employeeArray: any[] = [];

  isListView: boolean = true;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.loadDepartment();
    this.loadEmployee();
  }

  loadDepartment() {
    this.http.get("assets/department.json").subscribe((res: any) => {
      this.department = res.data;
    })
  }

  loadEmployee() {
    this.http.get("assets/getEmployee.json").subscribe((res: any) => {
      debugger;
      this.employeeArray = res.data;
    })
  }

}
