import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GoalDetails, Goal } from '../../interfaces/goal';
import { ReplaySubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class GoalService {

	private baseApiUrl = environment.baseApiUrl;
	private controllerUrl = this.baseApiUrl + 'goals';
	private goalSubject = new ReplaySubject<Goal[]>(1);

	public goals$: Observable<Goal[]> = this.goalSubject.asObservable();

	constructor(private httpClient: HttpClient) {
		this.forceGetAll();
	}

	forceGetAll(): void {
		this.httpClient.get<Goal[]>(this.controllerUrl)
			.subscribe(goals => this.goalSubject.next(goals));
	}

	getSingle(id: number): Observable<GoalDetails> {
		return this.httpClient.get<GoalDetails>(`${this.controllerUrl}/${id}`);
	}

	create(goal: Goal): Observable<Goal> {
		return this.httpClient.post<Goal>(this.controllerUrl, goal);
	}

	delete(id: number): Observable<{}> {
		return this.httpClient.delete<Goal>(`${this.controllerUrl}/${id}`);
	}
}
