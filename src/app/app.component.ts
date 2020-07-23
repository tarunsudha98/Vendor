import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from './entities/user.entity';
import { IUserModel } from './components/user';
import { UserService } from './services/user.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
    constructor(private router: Router,
        private userService: UserService){}
    isAdmin: boolean;
    isCustomer: boolean;
    ngOnInit() {
        this.addAdmin();
        this.userService.isLoggedIn();
        this.userService.isAdmin1.subscribe(p => {
            var userType = this.userService.getUserType();
            this.isAdmin = userType.isAdmin;
            this.isCustomer = userType.isCustomer
        })

        this.userService.isCustomer1.subscribe(p => {
            var userType = this.userService.getUserType();
            this.isAdmin = userType.isAdmin;
            this.isCustomer = userType.isCustomer
        })
    }

    addAdmin(){
        var user: IUser =  {
            name: 'admin',
            loginId: 'admin@gmail.com',
            password: 'admin123',
            isAdmin: true
        }
        var users: IUser[] = JSON.parse(localStorage.getItem('user'));
        if(!!users && users.length>0){
            var admin = users.find(p => p.loginId == 'admin@gmail.com')
            if(!!admin){
                return;
            }
        }
        else{
            users = [];
        }
        users.push(user);
        localStorage.setItem('user',JSON.stringify(users));
    }

}