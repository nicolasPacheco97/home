import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BannerComponent } from './shared/banner/banner.component';
import { DrawingComponent } from './drawing/drawing.component';
import { LayoutComponent } from './layout/layout.component';
import { FormComponent } from './shared/form/form.component';
import { InformationComponent } from './information/information.component';
import { SecondaryInfComponent } from './secondary-inf/secondary-inf.component';
import { ExpProfesionalComponent } from './exp-profesional/exp-profesional.component';
import { ExpAcademicaComponent } from './exp-academica/exp-academica.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedbackComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    DrawingComponent,
    LayoutComponent,
    FormComponent,
    InformationComponent,
    SecondaryInfComponent,
    ExpProfesionalComponent,
    ExpAcademicaComponent,
    ProyectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MaterialModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
