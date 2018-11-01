import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
	MatSidenavModule,
	MatToolbarModule,
	MatIconModule,
	MatListModule,
	MatTableModule,
	MatButtonModule,
	MatCardModule,
	MatDialogModule,
	MatInputModule,
	MatSelectModule,
	MatProgressSpinnerModule,
	MatSortModule,
} from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
		MatSidenavModule,
		MatToolbarModule,
		MatIconModule,
		MatListModule,
		MatCardModule,
		MatButtonModule,
		MatTableModule,
		MatDialogModule,
		MatInputModule,
		MatSelectModule,
		MatProgressSpinnerModule,
		MatSortModule
	],
	declarations: [],
	exports: [
		MatSidenavModule,
		MatToolbarModule,
		MatIconModule,
		MatListModule,
		MatCardModule,
		MatButtonModule,
		MatTableModule,
		MatDialogModule,
		MatInputModule,
		MatSelectModule,
		MatProgressSpinnerModule,
		MatSortModule
	]
})
export class MaterialModule { }
