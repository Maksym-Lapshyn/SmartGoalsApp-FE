import { Milestone } from './milestone';

export interface GoalDetails {
	id: number;
	name: string;
	description: string;
	startDate: Date;
	endDate: Date;
	milestones: Milestone[];
}

export interface Goal {
	id: number;
	name: string;
	description: string;
	startDate: Date;
	endDate: Date;
}
