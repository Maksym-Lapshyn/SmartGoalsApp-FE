import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalListComponent } from './components/goal-list/goal-list.component';
import { GoalDetailsResolver } from './resolvers/goal-details.resolver';
import { GoalDetailsComponent } from './components/goal-details/goal-details.component';

const routes: Routes = [
	{ path: '', redirectTo: '/goals', pathMatch: 'full' },
	{ path: 'goals', component: GoalListComponent },
	{
		path: 'goals/:goalId',
		component: GoalDetailsComponent,
		resolve: { goal: GoalDetailsResolver }
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class RouteModule { }
