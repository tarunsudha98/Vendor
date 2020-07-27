import { Injectable, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from '../entities/item.entity';
import { Vendor } from '../entities/vendor';

@Injectable()
export class ProductService {

    vendors: Vendor[];
    private items: Item[]=[];

    constructor(private router: Router) {
    }

    findAll(): Item[] {
        var items1 = localStorage.getItem('items');
        if(!!items1 && items1.length>0){
            this.items = JSON.parse(items1);
        }
        var vendors1 = localStorage.getItem('vendors');
        if(!!vendors1 && vendors1.length>0){
            this.vendors = JSON.parse(vendors1);
            this.vendors.forEach(x => {
                if(!this.items.find(y => y.vId == x.id)){
                    this.items.push(
                    {vId: x.id, id: '1', name: 'Shampoos', quantity: 0, },
                    {vId: x.id, id: '2', name: 'Soaps', quantity: 0 },
                    {vId: x.id, id: '3', name: 'Detergants', quantity: 0 })
                }
            })
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

    addItem(id: string, vendorId: string){
        let index = this.items.findIndex(p => p.id == id && p.vId == vendorId);
        this.items[index].quantity += 1;
        localStorage.setItem('items',JSON.stringify(this.items))
        alert('Item Added.')
    }

    removeItem(id: string, vendorId: string){
        let index = this.items.findIndex(p =>p.id == id && p.vId == vendorId);
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