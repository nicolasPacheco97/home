import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component'
import { FeedbackComponent } from './feedback/feedback.component';
import { DrawingComponent } from './drawing/drawing.component';
import { DocumentsComponent } from './documents/documents.component';

const routes: Routes = [
  {path: '', component: LayoutComponent, children: [
    {path: '',redirectTo: 'case', pathMatch: 'full'},
    {path: 'case', component: HomeComponent},
    {path: 'feedback', component: FeedbackComponent},
    {path: 'gallery', component: DrawingComponent},
    {path: 'cv', component: DocumentsComponent},
    {path: '**', redirectTo: 'case'}
  ]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
