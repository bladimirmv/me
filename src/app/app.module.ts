import { HomeModule } from './modules/home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/components/header/header.component';
import { AppContainerComponent } from './core/components/app-container/app-container.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { MaterialModule } from './shared/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppContainerComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
