import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.scss']
})
export class DialogUserComponent implements OnInit {

  user = new User();
  birthDate = Date;

  constructor() { }

  ngOnInit(): void {
  }

  saveUser(){
    this.user.birthDate = this.birthDate.getTime();
    console.log('Current user is', this.user);
  }
}
