import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Vendor } from 'src/app/entities/vendor';

@Component({
  selector: 'app-vendor-card',
  templateUrl: './vendor-card.component.html',
  styleUrls: ['./vendor-card.component.css']
})
export class VendorCardComponent {

  constructor(
    public dialogRef: MatDialogRef<VendorCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Vendor) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
