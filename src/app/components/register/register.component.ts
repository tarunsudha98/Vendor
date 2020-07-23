import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IRegister } from 'src/app/entities/register.entity';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { IUser } from 'src/app/entities/user.entity';

@Component({
    selector: 'register-component',
	templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit{
    emailPattern = "^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    activeForm = this.formBuilder1.group({
        name: ['', [Validators.required, Validators.minLength(4)]],
        loginId: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
        password: ['', [Validators.required]]
    })

    objReg: IUser[] = [];
    checkFlag: boolean = false;
    user: any = [];
    
    displayedColumns: string[] = ['name'];
    dataSource: MatTableDataSource<any>;
    constructor(
        private formBuilder1: FormBuilder,
        private router: Router
    ) {}

    ngOnInit(){
        //this.objReg = [];
        this.userData();
    }

    saveData(){
        // Validators.pattern('^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$')
        console.log('Hello');
        var obj: IUser = {
            name: this.activeForm.get('name').value,
            loginId: this.activeForm.get('loginId').value,
            password: this.activeForm.get('password').value,
            isAdmin: false
        };
        var users: IUser[] = JSON.parse(localStorage.getItem('user'));
        if(users != null){
            for (var i = 0; i < users.length; i++) {
                if(users[i].loginId == obj.loginId){
                    this.checkFlag = true;
                    alert('User is already registered.'+'\n'+'Please go to login page.')
                    this.router.navigate(['/home']);
                }
                else{
                    this.checkFlag =false;
                }
            }
        }
		
        if(!this.checkFlag){
            // if (localStorage.getItem('cart') == null) {
                //let users: any = [];
                users.push((obj));
                localStorage.setItem('user', JSON.stringify(users));
                alert('User is Successfully registered. Please log in to access the site.')
                //this.activeForm.reset();
                this.userData();
                this.router.navigate(['/login']);
        }
        
    }

    userData(): void {
		let users = JSON.parse(localStorage.getItem('user'));
		for (var i = 0; i < users.length; i++) {
			let item = users[i];
			this.objReg.push({
                name: item.name,
                loginId: item.loginId,
                password: item.password,
                isAdmin: item.isAdmin
            });
        }
        
        this.dataSource = new MatTableDataSource<any>(this.objReg);
	}
}