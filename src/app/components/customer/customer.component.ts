import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/entities/user.entity';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  users: IUser[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  logOut(){
    this.userService.logOut();
  }

  getUserList(){
    this.users = JSON.parse(localStorage.getItem('user'));
    let user = this.users.findIndex(p => p.name == 'admin')
    this.users.splice(user,1);
  }
  
}
