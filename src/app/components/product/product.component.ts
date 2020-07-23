import { Component, OnInit } from '@angular/core';

import { Product } from '../../entities/product.entity';
import { ProductService } from '../../services/product.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
	templateUrl: 'product.component.html'
})

export class ProductComponent implements OnInit {

	products: Product[];
	displayedColumns: string[] = ['id', 'name', 'price', 'buy'];
	dataSource: MatTableDataSource<any>;

	constructor(
		private productService: ProductService,
		private router: Router
	) { }

	ngOnInit() {
		this.products = this.productService.findAll();
  		this.dataSource = new MatTableDataSource<any>(this.products);
	}

	checkTime(id: string){
		var produts = this.productService.findAll();
		var product = produts.find(x => x.id == id);
		var now = new Date();

		if ((this.getMinutesNow() > this.getMinutes(product.startTime)) && (this.getMinutesNow() < this.getMinutes(product.endTime))){
			this.router.navigate(['/cart', {id}]);
		}
		else{
			alert('Product is not available right now.')
		}
	}

	getMinutesNow() {
		var timeNow = new Date();
		return timeNow.getHours()*60+timeNow.getMinutes();
	}
	getMinutes(str): number {
		var time = str.split(':');
		return (+time[0])*60+(+time[1])*1;
	}

}