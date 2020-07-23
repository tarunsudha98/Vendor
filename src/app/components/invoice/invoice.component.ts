import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../entities/product.entity';
import { Item } from '../../entities/item.entity';
import { ProductService } from '../../services/product.service';
import { CartComponent } from '../cart/cart.component';

@Component({
    selector: 'invoice-component',
	templateUrl: 'invoice.component.html'
})

export class InvoiceComponent implements OnInit{

	@ViewChild(CartComponent, { static: false })
    public matterCustDropdown: CartComponent;
    itemObject: Item[] = [];
    total: number = 0;
    taxes: number;
    sellerShare: number;
    websiteShare: number;
    charityShare: number;

	constructor(
    ) 
    { 
        
    }

    ngOnInit(){
        let cart = JSON.parse(localStorage.getItem('cart'));
		for (var i = 0; i < cart.length; i++) {
			let item = JSON.parse(cart[i]);
			this.itemObject.push({
				product: item.product,
				quantity: item.quantity
            });
			this.total += item.product.price * item.quantity;
		}

        // for(let i =0; i< this.itemObject.length; i++){
        //     this.total += this.itemObject[i].product.price * this.itemObject[i].quantity;
        // }
        this.taxes = ((19/100)*this.total);
        this.total += this.taxes;

        if(this.total<100){
            this.sellerShare = (0.7)*this.total;
            this.websiteShare = (0.2)*this.total;
            this.charityShare = (0.1)*this.total;
        }
        else if(this.total >=100 && this.total <500){
            this.sellerShare = (0.65)*this.total;
            this.websiteShare = (0.2)*this.total;
            this.charityShare = (0.15)*this.total;
        }
        else{
            this.sellerShare = this.websiteShare = this.charityShare = (0.33)*this.total;
        }

        localStorage.setItem('cart',null);
    }

}