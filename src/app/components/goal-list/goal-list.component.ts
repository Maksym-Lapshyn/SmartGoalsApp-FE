import { Component, OnInit } from '@angular/core';
import { GoalService } from 'src/app/services/goal/goal.service';
import { Observable } from 'rxjs/Observable';
import { Goal } from 'src/app/interfaces/goal';

@Component({
	selector: 'app-goal-list',
	templateUrl: './goal-list.component.html',
	styleUrls: ['./goal-list.component.css']
})
export class GoalListComponent implements OnInit {
	goals: Observable<Goal[]>;

	constructor(private goalService: GoalService) { }

	ngOnInit() {
		this.goals = this.goalService.getAll();
	}
}
