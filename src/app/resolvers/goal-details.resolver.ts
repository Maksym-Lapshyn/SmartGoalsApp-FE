import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GoalDetails } from '../interfaces/goal';
import { GoalService } from 'src/app/services/goal/goal.service';

@Injectable()
export class GoalDetailsResolver implements Resolve<Observable<GoalDetails>> {

	constructor(private goalService: GoalService) {
	}

	resolve(route: ActivatedRouteSnapshot) {
		const goalId = route.params.goalId;

		return this.goalService.getSingle(goalId);
	}
}