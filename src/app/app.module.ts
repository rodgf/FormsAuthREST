import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EntradaComponent } from './entrada/entrada.component';

//
@NgModule({
  declarations: [
    AppComponent,
    EntradaComponent
  ],
  imports: [
    BrowserModule,
		AppRoutingModule,
		HttpClientModule
	],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
