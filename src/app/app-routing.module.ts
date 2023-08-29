import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DevComponent } from './components/dev/dev.component';
import { AplicationComponent } from './components/aplication/aplication.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'dev/:id', component: DevComponent},
  { path: 'aplication', component: AplicationComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
