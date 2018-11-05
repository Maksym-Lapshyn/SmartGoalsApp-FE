import { Component, OnInit } from '@angular/core';
import { GoalService } from 'src/app/services/goal/goal.service';
import { Observable } from 'rxjs/Observable';
import { Goal } from 'src/app/interfaces/goal';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { GoalCreateComponent } from '../goal-create/goal-create.component';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
	selector: 'app-goal-list',
	templateUrl: './goal-list.component.html',
	styleUrls: ['./goal-list.component.css']
})
export class GoalListComponent implements OnInit {

	goals: Observable<Goal[]>;

	chartOptions = {
		responsive: true,
		title: {
			display: true,
			text: 'You goal activity'
		}
	};

	chartData = [
		{ data: [330, 600, 260, 700], label: 'Account A' },
		{ data: [120, 455, 100, 340], label: 'Account B' },
		{ data: [45, 67, 800, 500], label: 'Account C' }
	];

	chartLabels = ['January', 'February', 'Mars', 'April'];

	constructor(private goalService: GoalService, private dialog: MatDialog) { }

	ngOnInit() {
		this.goals = this.goalService.goals$;
	}

	onChartClick(event) {
		console.log(event);
	}

	createGoal() {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.disableClose = true;
		dialogConfig.height = '400px';
		dialogConfig.width = '600px';

		const dialogRef = this.dialog.open(GoalCreateComponent, dialogConfig);

		dialogRef.afterClosed().subscribe(value => {
			this.goalService.create(value).subscribe(newGoal => {
				this.goalService.forceGetAll();
			});
		});
	}

	onGoalDeleted(goalId: number) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.height = '150';
		dialogConfig.width = '250';

		dialogConfig.data = {
			message: `The goal with id ${goalId} will be deleted. Are you sure?`,
			confirmButtonText: 'Delete'
		};

		const dialogRef = this.dialog.open(ConfirmationDialogComponent, dialogConfig);

		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this.goalService.delete(goalId).subscribe(() => {
					this.goalService.forceGetAll();
				});
			}
		});
	}
}
