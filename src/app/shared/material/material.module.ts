import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table';

import { 
         MatButtonModule, 
         MatCheckboxModule,
         MatDatepickerModule,
         MatRadioModule,
         MatNativeDateModule,
         MatDialogModule,
         MatCardModule,
         MatFormFieldModule,
         MatInputModule,
         MatGridListModule,
         MatAutocompleteModule,
         MatSidenavModule,
         MatToolbarModule,
         MatMenuModule,
         MatIconModule,
         MatListModule,
         MatTableModule,
         MatTabsModule,
         MatPaginatorModule,
         MatSelectModule
                                    } from '@angular/material';

const materialModule = [
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    CdkTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatSelectModule
];

@NgModule({
    imports: [
        CommonModule,
        materialModule,
        
    ],
    declarations:[
 
    ],

    exports: [
        CommonModule, 
        materialModule,
    ],
})
export class MaterialModule { }