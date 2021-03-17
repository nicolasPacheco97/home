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
import { DocumentsComponent } from './documents/documents.component';
import { DrawingComponent } from './drawing/drawing.component';
import { LayoutComponent } from './layout/layout.component';
import { FormComponent } from './shared/form/form.component';
import { InformationComponent } from './information/information.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedbackComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    DocumentsComponent,
    DrawingComponent,
    LayoutComponent,
    FormComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
