import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatTableModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MyDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    CdkTableModule,FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents: [
    MyDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
