import { Injectable, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from '../entities/item.entity';

@Injectable()
export class ProductService implements OnInit {

    private items: Item[] = 
    [
        {id: '1', name: 'Shampoos', quantity: 0, },
        {id: '2', name: 'Soaps', quantity: 0 },
        {id: '3', name: 'Detergants', quantity: 0 }
    ];

    constructor(private router: Router) {
    }
    ngOnInit(){
        this.findAll();
    }

    findAll(): Item[] {
        var items1 = localStorage.getItem('items');
        if(!!items1 && items1.length>0){
            this.items = JSON.parse(items1);
        }
        return this.items;
    }

    find(id: string): Item {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].id == id) {
                return this.items[i];
            }
        }
        return this.items[-1];
    }

    // addItem(obj: Product){
    //     this.products.push(obj);
    //     localStorage.setItem('products',JSON.stringify(this.products))
    //     alert('Product Added.')
    //     this.router.navigate(['/products'])
    // }

    addItem(id: string){
        let index = this.items.findIndex(p => p.id == id);
        this.items[index].quantity += 1;
        localStorage.setItem('items',JSON.stringify(this.items))
        alert('Item Added.')
    }

    removeItem(id: string){
        let index = this.items.findIndex(p =>p.id == id);
        if(this.items[index].quantity > 0){
            this.items[index].quantity -=1;
            alert('Item Removed.')
        }
        else{
            alert('No Item in stock.')
        }
        localStorage.setItem('items',JSON.stringify(this.items));
    }

}