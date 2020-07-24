import { Injectable, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Vendor } from '../entities/vendor';

@Injectable()
export class VendorService implements OnInit {

    private vendors: Vendor[] = [];
    
    constructor(private router: Router) {
    }
    ngOnInit(){
        this.findAll();
    }

    findAll(): Vendor[] {
        var vendor1 = localStorage.getItem('vendors');
        if(!!vendor1 && vendor1.length>0){
            this.vendors = JSON.parse(vendor1);
        }
        return this.vendors;
    }

    find(id: any): Vendor {
        for (var i = 0; i < this.vendors.length; i++) {
            if (this.vendors[i].id == id.toString()) {
                return this.vendors[i];
            }
        }
        return this.vendors[-1];
    }

    addItem(obj: Vendor){
        var tempObj = this.find(obj.id);
        if(!tempObj){
            this.vendors.push(obj);
            localStorage.setItem('vendors',JSON.stringify(this.vendors))
            alert('Vendor Added.')
            this.router.navigate(['/vendors'])
        }
        else{
            alert('Vendor already exists with this id.');
        }
        
    }

    updateItem(obj: Vendor){
        let index = this.vendors.findIndex(p =>p.id == obj.id);
        this.vendors[index] = obj;
        localStorage.setItem('vendors',JSON.stringify(this.vendors))
        alert('Vendor Updated.')
        this.router.navigate(['/vendors'])
    }

    removeItem(id: any){

        let index = this.vendors.findIndex(p =>p.id == id.toString());
        this.vendors.splice(index, 1);
        localStorage.setItem('vendors',JSON.stringify(this.vendors))
        alert('Vendor Removed.')
    }

}