import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { CustomerComponent } from './components/customer/customer.component';
import { HomeComponent } from './components/home/home.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { AddVendorComponent } from './components/add-vendor/add-vendor.component';
import { RemoveVendorComponent } from './components/remove-vendor/remove-vendor.component';
import { ManageCommodityComponent } from './components/manage-commodity/manage-commodity.component';

const routes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'vendors', component: VendorComponent },
	{ path: 'login', component: LoginComponent},
	{ path: 'register', component: RegisterComponent},
	{ path: 'addVendor', component: AddVendorComponent},
	{ path: 'removeVendor', component: RemoveVendorComponent},
	{ path: 'manageItem', component: ManageCommodityComponent},
	{ path: '**', redirectTo: '' }
	
];

export const routing = RouterModule.forRoot(routes);