import { Component, OnInit, ViewChild } from '@angular/core';
import { GoalService } from 'src/app/services/goal/goal.service';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Goal } from 'src/app/interfaces/goal';

@Component({
	selector: 'app-goal-table',
	templateUrl: './goal-table.component.html',
	styleUrls: ['./goal-table.component.css']
})
export class GoalTableComponent implements OnInit {

	@ViewChild(MatSort) sort: MatSort;
	dataSource: MatTableDataSource<Goal>;
	displayedColumns = ['id', 'name', 'description', 'startDate', 'endDate', 'actions'];

	constructor(private goalService: GoalService) { }

	ngOnInit() {
		this.goalService.getAll().subscribe((goals: Goal[]) => {
			this.dataSource = new MatTableDataSource(goals);
			this.dataSource.sort = this.sort;
		});
	}
}
