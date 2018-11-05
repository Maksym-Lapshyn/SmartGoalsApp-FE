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

	chartOptions: {};

	chartData: {}[];
	chartLabels: string[];

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		this.goal = this.route.snapshot.data.goal;

		this.chartLabels = [
			'Start',
			'End'
		];

		this.chartOptions = {
			responsive: true,
			title: {
				display: true,
				text: 'Your goal activity'
			},
			scales: {
				xAxes: [{
					type: 'time',
					time: {
						min: this.goal.startDate,
						max: this.goal.endDate,
						displayFormats: {
							month: 'MMM YYYY'
						}
					}
				}]
			}
		};

		this.chartData = [{
			data: [{
				x: this.goal.startDate,
				y: 0
			}, {
				x: this.goal.endDate,
				y: 1
			}]
		}];
	}
}
