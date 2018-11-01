import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouteModule } from './route.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GoalListComponent } from './components/goal-list/goal-list.component';
import { GoalService } from './services/goal/goal.service';
import { GoalDetailsComponent } from './components/goal-details/goal-details.component';
import { GoalDetailsResolver } from './resolvers/goal-details.resolver';
import { GoalTableComponent } from './components/goal-table/goal-table.component';

@NgModule({
	entryComponents: [],
	declarations: [
		AppComponent,
		GoalListComponent,
		GoalDetailsComponent,
		GoalTableComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MaterialModule,
		FlexLayoutModule,
		RouteModule,
		FormsModule,
		HttpClientModule
	],
	providers: [GoalService, GoalDetailsResolver],
	bootstrap: [AppComponent]
})
export class AppModule { }
