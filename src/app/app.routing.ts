//Importar modulos de router de angular
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';
//importar componentes
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { ToursComponent } from './tours/tours.component';
import { HotelesComponent } from './hoteles/hoteles.component';

const appRoutes:Routes=[
    {path: '', component: ToursComponent},
    {path: 'restaurantes', component: RestaurantesComponent},
    {path: 'hoteles', component: HotelesComponent},
    {path: '**', component: ToursComponent},
];
//exportar ruta de modulo
export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders= RouterModule.forRoot(appRoutes);