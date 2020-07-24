import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { VendorService } from 'src/app/services/vendor.service';
import { Vendor } from 'src/app/entities/vendor';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {

  constructor(private formBuilder1: FormBuilder,
    private vendorService: VendorService) { }
  activeForm = this.formBuilder1.group({
    id: ['', [Validators.required]],
    name: ['', [Validators.required]],
    address: '',
    creationDate: ''
  })
  ngOnInit(): void {
  }

  addVendor(){
    var obj: Vendor= {
      id: this.activeForm.get('id').value,
      name: this.activeForm.get('name').value,
      address: this.activeForm.get('address').value,
      createdDate: this.activeForm.get('creationDate').value
  };
    this.vendorService.addItem(obj);
  }
}