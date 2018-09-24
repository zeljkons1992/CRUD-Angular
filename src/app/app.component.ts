import { Component,ViewChild, Inject, Input } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { convertInjectableProviderToFactory } from '@angular/core/src/di/injectable';

export interface Zaposleni{
  id: number;
  ime: string;
  prezime: string;
}

export interface DialogData {
  animal: string;
  name: string;
}


 const Tabela: Zaposleni[] = [
  {id: 1 , ime: "Zeljko", prezime: "Vukosavljevic"},
  {id: 2, ime: "Zorana", prezime: "Zaric"}
]


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ["ime", "prezime", "actionsColumn"];
  @Input() table = Tabela;
  @ViewChild('jedanRed') @Input() jedanRed;

  constructor(public dialog: MatDialog) {}

  brisanje(name: HTMLInputElement){
    name.remove();
  }

  openDialog(jedanRed: HTMLInputElement): void {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      data:{
        header: "Editovanje",
        name: jedanRed.cells[0].innerText,
        lastName: jedanRed.cells[1].innerText
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openAdd(){
    const dialogRef = this.dialog.open(MyDialogComponent, {
      data:{
        header: "Dodavanje"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
