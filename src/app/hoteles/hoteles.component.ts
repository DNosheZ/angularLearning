import { Component } from '@angular/core';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.css']
})
export class HotelesComponent {
  public title:string='Bienvenido a la seccion de hoteles';
  public subtitle:string='Aqui podras encontrar todas las ofertas de hoteleria en Medellin';
  public subtitleExtra:string='todo seguro y confortable'
}
