import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GoalDetails, Goal } from '../../interfaces/goal';

@Injectable({
	providedIn: 'root'
})
export class GoalService {

	private baseApiUrl = environment.baseApiUrl;
	private controllerUrl = this.baseApiUrl + 'goals';

	constructor(private httpClient: HttpClient) { }

	getAll(): Observable<Goal[]> {
		return this.httpClient.get<Goal[]>(this.controllerUrl);
	}

	getSingle(id: number): Observable<GoalDetails> {
		return this.httpClient.get<GoalDetails>(`${this.controllerUrl}/${id}`);
	}
}
