import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeroesModules } from './heroes/heroes.modules';
// import { ContadorComponent } from './contador/contador/contador.component';
import { ContadorModules } from './contador/contador.modules';



@NgModule({
  declarations: [
    AppComponent,
    // ContadorComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModules,
    ContadorModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
