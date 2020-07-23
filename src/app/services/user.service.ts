import { Injectable } from '@angular/core';
import { IUserModel } from '../components/user';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { IUser } from '../entities/user.entity';

@Injectable()
export class UserService {

    constructor(private router: Router) {}
    isAdmin: boolean;

    isCustomer: boolean;
    adminSubject = new BehaviorSubject<boolean>(false);
    customerSubject = new BehaviorSubject<boolean>(false);
    isAdmin1 = this.adminSubject.asObservable();
    isCustomer1= this.customerSubject.asObservable();
    isLoggedIn(){
        let a = sessionStorage.getItem('userId');
        if(!!a && a.length>0){
            let user: IUserModel = JSON.parse(a);
            if(user.emailId.length > 0){
                if(user.isAdmin){
                    this.isAdmin = true;
                    this.updateUserType();
                    this.router.navigate(['/products'])
                }
                else{
                    this.isCustomer = true;
                    this.updateUserType();
                    this.router.navigate(['/products'])
                }
            }
            else{
                // this.isAdmin = false;
                // this.isCustomer = false;
                this.router.navigate(['/login'])
            }
            
        }else{
            // this.isAdmin = false;
            // this.isCustomer = false;
            this.router.navigate(['/login'])
        }
    }

    logOut(){
        sessionStorage.removeItem('userId');
        this.isAdmin = false;
        this.isCustomer = false;
        this.updateUserType();
        alert('You have been logged out.')
        this.router.navigate(['/login'])
    }

    updateUserType(){
        this.adminSubject.next(this.isAdmin);
        this.customerSubject.next(this.isCustomer);
    }

    getUserType(){
        return {isAdmin:this.isAdmin, isCustomer:this.isCustomer};
    }

    loginData(activeForm: FormGroup){
        this.isLoggedIn();
        var obj: {id:string, password: string} = {
            id: activeForm.get('loginId').value,
            password: activeForm.get('password').value
        };

        var users: IUser[] = JSON.parse(localStorage.getItem('user'));

        if(users != null){ 
            let user: IUser = users.find(p => p.loginId.toUpperCase() == obj.id.toUpperCase());
            if(!!user){
                if(user.password != obj.password){
                    alert('Password is Incorrect.')
                }
                else{
                    alert('User is successfully signed in.')
                    // let user = this.activeForm.get('loginId').value;  
                    // let value = this.activeForm.get('loginId').value; 
                    let value: IUserModel = {emailId: activeForm.get('loginId').value,
                        name: user.name,
                        isAdmin: user.isAdmin }
                    sessionStorage.setItem('userId', JSON.stringify(value));
                    this.isAdmin = user.isAdmin;
                    this.isCustomer = !user.isAdmin;
                    this.updateUserType();
                    this.router.navigate(['/products'])
                    
                }
            }
            else{
                alert('User is not registered.'+'\n'+'Please register first.')
                        this.router.navigate(['/register'])
            }
        }
        else{
            let user1: IUser =  {
                name: 'admin',
                loginId: 'admin@gmail.com',
                password: 'admin123',
                isAdmin: true
            }
            let users1: any = [];
        users1.push(user1);
        localStorage.setItem('user',JSON.stringify(users1));
        alert('User is successfully signed in.')
		let value: IUserModel = {emailId: activeForm.get('loginId').value,
                        name: user1.name,
                        isAdmin: user1.isAdmin }
                    sessionStorage.setItem('userId', JSON.stringify(value));
                    this.isAdmin = user1.isAdmin;
                    this.isCustomer = !user1.isAdmin;
                    this.updateUserType();
                    this.router.navigate(['/products'])
        }
    }
}