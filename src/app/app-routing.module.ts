import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ManageProductComponent } from './components/manage-product/manage-product.component';
import { RemoveItemComponent } from './components/remove-item/remove-item.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'products', component: ProductComponent },
	{ path: 'cart', component: CartComponent },
	{ path: 'invoice', component: InvoiceComponent},
	{ path: 'login', component: LoginComponent},
	{ path: 'register', component: RegisterComponent},
	{ path: 'manageProducts', component: ManageProductComponent},
	{ path: 'removeItem', component: RemoveItemComponent},
	{ path: '**', redirectTo: '' }
	
];

export const routing = RouterModule.forRoot(routes);