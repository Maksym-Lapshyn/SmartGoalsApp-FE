import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { GoalService } from 'src/app/services/goal/goal.service';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Goal } from 'src/app/interfaces/goal';

@Component({
	selector: 'app-goal-table',
	templateUrl: './goal-table.component.html',
	styleUrls: ['./goal-table.component.css']
})
export class GoalTableComponent implements OnInit {

	@Output() goalDeleted = new EventEmitter<number>();
	@ViewChild(MatSort) sort: MatSort;

	dataSource: MatTableDataSource<Goal>;
	displayedColumns = ['id', 'name', 'description', 'startDate', 'endDate', 'actions'];

	constructor(private goalService: GoalService) { }

	ngOnInit() {
		this.goalService.goals$.subscribe(goals => {
			this.dataSource = new MatTableDataSource(goals);
			this.dataSource.sort = this.sort;
		});
	}

	deleteGoal(goalId: number) {
		this.goalDeleted.emit(goalId);
	}
}
