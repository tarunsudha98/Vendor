import { Injectable, OnInit } from '@angular/core';

import { Product } from '../entities/product.entity';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable()
export class ProductService implements OnInit {

    private products: Product[] = [];

    constructor(private router: Router) {
    }
    ngOnInit(){
        this.findAll();
    }

    findAll(): Product[] {
        var products1 = localStorage.getItem('products');
        if(!!products1 && products1.length>0){
            this.products = JSON.parse(products1);
        }
        return this.products;
    }

    find(id: string): Product {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return this.products[i];
            }
        }
        return this.products[-1];
    }

    addItem(obj: Product){
        this.products.push(obj);
        localStorage.setItem('products',JSON.stringify(this.products))
        alert('Product Added.')
        this.router.navigate(['/products'])
    }

    removeItem(id: string){

        let index = this.products.findIndex(p =>p.id == id);
        this.products.splice(index, 1);
        localStorage.setItem('products',JSON.stringify(this.products))
        alert('Product Removed.')
        // this.router.navigate(['/products'])
    }

}