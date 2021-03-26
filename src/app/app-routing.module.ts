import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component'
import { FeedbackComponent } from './feedback/feedback.component';
import { DrawingComponent } from './drawing/drawing.component';

const routes: Routes = [
  {path: '', component: LayoutComponent, children: [
    {path: '',redirectTo: 'np', pathMatch: 'full'},
    {path: 'np', component: HomeComponent},
    {path: 'feedback', component: FeedbackComponent},
    {path: 'gallery', component: DrawingComponent},
    {path: '**', redirectTo: 'np'}
  ]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
