import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-goal-create',
	templateUrl: './goal-create.component.html',
	styleUrls: ['./goal-create.component.css']
})
export class GoalCreateComponent implements OnInit {

	goalForm = new FormGroup({
		name: new FormControl('', Validators.required),
		description: new FormControl('', Validators.required),
		startDate: new FormControl('', Validators.required),
		endDate: new FormControl('', Validators.required)
	});

	constructor(public dialogRef: MatDialogRef<GoalCreateComponent>) { }

	ngOnInit() {
	}

	create() {
		this.dialogRef.close(this.goalForm.value);
	}
}
