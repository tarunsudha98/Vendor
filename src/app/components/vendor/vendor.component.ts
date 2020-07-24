import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/entities/vendor';
import { VendorService } from 'src/app/services/vendor.service';
import { MatDialog } from '@angular/material/dialog';
import { VendorCardComponent } from '../vendor-card/vendor-card.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
	templateUrl: 'vendor.component.html'
})

export class VendorComponent implements OnInit, AfterViewInit {
	vendors: Vendor[];
	displayedColumns: string[] = ['id', 'name', 'address', 'createdDate', 'edit', 'favourite'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

	constructor(
		private vendorService: VendorService,
    private router: Router,
    public dialog: MatDialog
	) { }

	ngOnInit() {
    this.vendors = this.vendorService.findAll();
    console.log(this.vendors);
    this.dataSource = new MatTableDataSource<any>(this.vendors);

  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  
  updateVendor(id: any){
    // add update card here
    var vendor = this.vendorService.find(id);
    const dialogRef = this.dialog.open(VendorCardComponent, {
      width: '400px',
      height: '350px',
      data: {id: vendor.id, name: vendor.name, address: vendor.address, createdDate: vendor.createdDate}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(!!result){
        this.vendorService.updateItem(result);
        this.vendors = this.vendorService.findAll();
        this.dataSource = new MatTableDataSource<any>(this.vendors);
      }
      
    });
  }

  applyFilter(value: any){
    console.log(typeof(value));
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  checkFav(value: any, id: any){
    var index = this.vendors.findIndex(x => x.id == id);
    if(value) {
      this.vendors[index].favourite = false;
    }
    else{
      this.vendors[index].favourite = true;
    }
    console.log(this.vendors)
    localStorage.setItem('vendors',JSON.stringify(this.vendors))
    this.dataSource = new MatTableDataSource<any>(this.vendors);
  }

}