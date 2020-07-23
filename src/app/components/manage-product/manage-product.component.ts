import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/entities/product.entity';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  constructor(private formBuilder1: FormBuilder,
    private productService: ProductService) { }
  activeForm = this.formBuilder1.group({
    id: ['', [Validators.required]],
    name: ['', [Validators.required]],
    price: 0,
    startTime: null,
    endTime: null
  })
  ngOnInit(): void {
  }
  addProduct(){
    var obj: Product= {
      id: this.activeForm.get('id').value,
      name: this.activeForm.get('name').value,
      price: this.activeForm.get('price').value,
      startTime: this.activeForm.get('startTime').value,
      endTime: this.activeForm.get('endTime').value
  };
    this.productService.addItem(obj);
  }
}
