import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { FeedbackComponent } from './feedback/feedback.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'feedback', component: FeedbackComponent},
  //{path: 'galery',},
  //{path: 'cv',},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
