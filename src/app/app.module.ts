import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { ToursComponent } from './tours/tours.component';
import { HotelesComponent } from './hoteles/hoteles.component';
import { routing, appRoutingProviders } from './app.routing';
import { ModelosComponent } from './modelos/modelos.component';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantesComponent,
    ToursComponent,
    HotelesComponent,
    ModelosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
