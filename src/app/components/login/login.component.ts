import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserModel } from '../user';
import { IUser } from 'src/app/entities/user.entity';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'login-component',
	templateUrl: 'login.component.html'
})

export class LoginComponent{
    emailPattern = "^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    obj: {id:string, password: string};
    appFlag: boolean;
    count: number= 0;
    activeForm = this.formBuilder1.group({
        loginId: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
        password: ['', [Validators.required]]
    })
    constructor(
        private formBuilder1: FormBuilder,
        private router: Router,
        private userService:UserService
    ) {}

    saveData(){
       this.userService.loginData(this.activeForm);	
    }
}