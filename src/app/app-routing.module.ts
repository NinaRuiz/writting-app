import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditorPageComponent} from './pages/editor-page/editor-page.component';


const routes: Routes = [
  {path: 'editor', component: EditorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
