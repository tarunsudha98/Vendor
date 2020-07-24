import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ProductService } from './services/product.service';

import { routing } from './app-routing.module';
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
import { UserService } from './services/user.service';
import { VendorComponent } from './components/vendor/vendor.component';
import { VendorCardComponent } from './components/vendor-card/vendor-card.component';
import { RemoveVendorComponent } from './components/remove-vendor/remove-vendor.component';
import { AddVendorComponent } from './components/add-vendor/add-vendor.component';
import { MatDialogModule } from '@angular/material/dialog';
import { VendorService } from './services/vendor.service';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon'
import { MatSortModule } from '@angular/material/sort';
import { ManageCommodityComponent } from './components/manage-commodity/manage-commodity.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CustomerComponent,
    AdminComponent,
    VendorComponent,
    VendorCardComponent,
    RemoveVendorComponent,
    AddVendorComponent,
    ManageCommodityComponent
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
    MatCardModule,
    MatDialogModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    MatIconModule
  ],
  providers: [
    ProductService,
    UserService,
    VendorService
  ],
  entryComponents: [
    VendorCardComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }