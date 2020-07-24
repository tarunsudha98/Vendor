import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/services/product.service';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-remove-vendor',
  templateUrl: './remove-vendor.component.html',
  styleUrls: ['./remove-vendor.component.css']
})
export class RemoveVendorComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'address', 'createdDate', 'remove'];
	dataSource: MatTableDataSource<any>;
  constructor(private vendorService: VendorService) { }

  ngOnInit() {
      var vendors = this.vendorService.findAll();
  		this.dataSource = new MatTableDataSource<any>(vendors);
  }

  removeItem(id: any){
     this.vendorService.removeItem(id);
     var vendors = this.vendorService.findAll();
  	 this.dataSource = new MatTableDataSource<any>(vendors);
  }

}

