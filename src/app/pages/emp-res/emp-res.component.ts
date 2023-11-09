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

  employeeObj: any = {
    "departmentId": 1,
    "firstName": "",
    "lastName": "",
    "department": "",
    "gender": "",
    "email": "",
    "phoneNo": ""
  }

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
      this.employeeArray = res.data;
    })
  }

  onCreateEmp() {
    // this.http.post("assets/postEmployee.json", this.employeeObj).subscribe((res: any) => {
    //   alert(res.massege);
    //   this.loadEmployee()
    debugger;
    this.http.get("assets/postEmployee.json").subscribe((res: any) => {
      alert(res.massege);
      this.loadEmployee()
    })
  }

  onEdit(item: any) {
    this.employeeObj = item;
    this.isListView = false;
  }

  onDelete(item: any) {
    this.http.get("assets/deleteEmployee.json").subscribe((res: any) => {
      alert(res.massege);
      this.loadEmployee()
    })
  }
}
