import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/entities/item.entity';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-manage-commodity',
  templateUrl: './manage-commodity.component.html',
  styleUrls: ['./manage-commodity.component.css']
})
export class ManageCommodityComponent implements OnInit {

  items: Item[];
	displayedColumns: string[] = ['id', 'name', 'quantity', 'totalItems', 'totalCost', 'add', 'remove'];
  dataSource: MatTableDataSource<any>;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.items = this.productService.findAll();
    console.log(this.items);
    this.dataSource = new MatTableDataSource<any>(this.items);
  }

  costItem(id: any){
    if(id == '1'){              // cost of shampoo per piece
      return 150;
    }
    else if(id == '2'){         // cost of soap per piece
      return 45;
    }
    else{
      return 96;               // cost of detergant per piece
    }
  }

  addItem(id: any){
    this.productService.addItem(id);
    this.items = this.productService.findAll();
    this.dataSource = new MatTableDataSource<any>(this.items);
  }
  
  removeItem(id: any){
    this.productService.removeItem(id);
    this.items = this.productService.findAll();
    this.dataSource = new MatTableDataSource<any>(this.items);
  }

}
