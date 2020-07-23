import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/entities/user.entity';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: IUser[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  logOut(){
    this.userService.logOut();
  }
  getUserList(){
    this.users = JSON.parse(localStorage.getItem('user'));
  }
}
