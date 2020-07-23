import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-remove-item',
  templateUrl: './remove-item.component.html',
  styleUrls: ['./remove-item.component.css']
})
export class RemoveItemComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'remove'];
	dataSource: MatTableDataSource<any>;
  constructor(private productService:ProductService) { }

  ngOnInit() {
      var products = this.productService.findAll();
  		this.dataSource = new MatTableDataSource<any>(products);
  }

  removeItem(id: string){
     this.productService.removeItem(id);
     var products = this.productService.findAll();
  	 this.dataSource = new MatTableDataSource<any>(products);
  }

}
