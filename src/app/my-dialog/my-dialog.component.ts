import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {
  ime: string;
  prezime: string;
  header: string;

  constructor(public dialogRef: MatDialogRef<MyDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.header = this.data.header;
    this.ime = this.data.name;
    this.prezime = this.data.lastName;

  }

  save(){
    
  }

  cancel(){
    this.dialogRef.close();
  }

}
