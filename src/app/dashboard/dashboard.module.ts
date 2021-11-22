import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
//import { AppRoutingModule, rountingComponents } from './app-routing.module';
//import { AppComponent } from './app.component';
//import { PersonaComponent } from './modulo-persona/persona/persona.component';
//import { LoginComponent } from './modulo-seguridad/login/login.component';
import {DashboardComponent} from './dashboard.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    //rountingComponents,
    //PersonaComponent,
    //LoginComponent
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    //AppRoutingModule,
    FormsModule
  ],
  //providers: [],
  //bootstrap: [AppComponent]
})
export class DashboarModule { }
