import { Component } from '@angular/core';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent {
  public title:string='Bienvenido a la pagina de restaurante';
  public subtitle:string='Aqui podras encontrar restaurantes cerca a ti';
  public subtitleExtra:string='donde podras disfrutar de deliciosos platillos colombianos y paisas';
  constructor(){};
}
