import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewerComponent } from './components/viewer/viewer.component';
import { InfobarComponent } from './components/infobar/infobar.component';
import { EditorComponent } from './components/editor/editor.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { TabberComponent } from './components/shared/tabber/tabber.component';
import { TabDirective } from './components/shared/tabber/tab.directive';
import { HomeComponent } from './components/home/home.component';

@NgModule({
	declarations: [
		AppComponent,
		ViewerComponent,
		InfobarComponent,
		ViewerComponent,
		EditorComponent,
		ButtonComponent,
		TabberComponent,
		TabDirective,
  HomeComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		ReactiveFormsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
