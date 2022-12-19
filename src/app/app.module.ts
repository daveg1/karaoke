import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewerComponent } from './components/viewer/viewer.component';
import { InfobarComponent } from './components/infobar/infobar.component';
import { EditorComponent } from './components/editor/editor.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { TabberComponent } from './components/shared/tabber/tabber.component';
import { TabDirective } from './components/shared/tabber/tab.directive';

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
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
