import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoalDetails } from '../../interfaces/goal';

@Component({
	selector: 'app-goal-details',
	templateUrl: './goal-details.component.html',
	styleUrls: ['./goal-details.component.css']
})
export class GoalDetailsComponent implements OnInit {
	goal: GoalDetails;

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		this.goal = this.route.snapshot.data.goal;
	}

}
