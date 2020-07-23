import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';

import { ProductService } from './services/product.service';

import { routing } from './app-routing.module';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AdminComponent } from './components/admin/admin.component';
import { ManageProductComponent } from './components/manage-product/manage-product.component';
import { UserService } from './services/user.service';
import { RemoveItemComponent } from './components/remove-item/remove-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductComponent,
    InvoiceComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CustomerComponent,
    AdminComponent,
    ManageProductComponent,
    RemoveItemComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [
    ProductService,
    UserService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }