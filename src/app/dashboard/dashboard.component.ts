import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore/firestore';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

  
})
export class DashboardComponent implements OnInit {
  todos: string[] = ['Meeting with the boss', 'Check earnings', 'Check customer data', 'Pay bills', 'Material order'];
  //employees: Employees = new Employees();
  allEmployees:any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
