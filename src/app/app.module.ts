import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouteModule } from './route.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GoalListComponent } from './components/goal-list/goal-list.component';
import { GoalService } from './services/goal/goal.service';
import { GoalDetailsComponent } from './components/goal-details/goal-details.component';
import { GoalDetailsResolver } from './resolvers/goal-details.resolver';
import { GoalTableComponent } from './components/goal-table/goal-table.component';
import { GoalCreateComponent } from './components/goal-create/goal-create.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
	entryComponents: [
		GoalCreateComponent,
		ConfirmationDialogComponent
	],
	declarations: [
		AppComponent,
		GoalListComponent,
		GoalDetailsComponent,
		GoalTableComponent,
		GoalCreateComponent,
		ConfirmationDialogComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MaterialModule,
		FlexLayoutModule,
		RouteModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule
	],
	providers: [GoalService, GoalDetailsResolver],
	bootstrap: [AppComponent]
})
export class AppModule { }
