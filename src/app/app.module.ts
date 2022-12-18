import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollerComponent } from './components/scroller/scroller.component';
import { InfobarComponent } from './components/infobar/infobar.component';
import { ViewerComponent } from './pages/viewer/viewer.component';
import { EditorComponent } from './pages/editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollerComponent,
    InfobarComponent,
    ViewerComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
