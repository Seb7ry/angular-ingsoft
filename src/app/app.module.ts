import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

import { DevopsService } from "./services/devops.service";
import { DevComponent } from './components/dev/dev.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { AplicationComponent } from './components/aplication/aplication.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    DevComponent,
    TarjetaComponent,
    AplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DevopsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
