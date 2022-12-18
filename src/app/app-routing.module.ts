import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewerComponent } from './components/viewer/viewer.component';
import { EditorComponent } from './pages/editor/editor.component';

const routes: Routes = [
	{ path: '', component: ViewerComponent },
	{ path: 'edit', component: EditorComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
