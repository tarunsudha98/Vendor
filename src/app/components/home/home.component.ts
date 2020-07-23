import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/entities/user.entity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: IUser[];
  constructor() { }

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('user'));
  }

  getUserList(){
    this.users = JSON.parse(localStorage.getItem('user'));
    let user = this.users.findIndex(p => p.name == 'admin')
    this.users.splice(user,1);
  }
}
