import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
	selector: 'app-confirmation-dialog',
	templateUrl: './confirmation-dialog.component.html',
	styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {

	message: string;
	confirmButtonText: string;

	constructor(private dialogRef: MatDialogRef<ConfirmationDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
		this.message = data.message;
		this.confirmButtonText = data.confirmButtonText;
	}

	ngOnInit() { }

	confirm() {
		this.dialogRef.close(true);
	}
}
