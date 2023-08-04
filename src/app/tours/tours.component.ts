import { Component } from '@angular/core';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent {
  public title:string='Bienvenido a la pagina de Tours por Medellin';
  public subtitle:string=`Aqui podras consultar lo que requieras, para hacer 
  de tu estadia en la Ciudad de la Eterna Primavera, un manjar a los sentidos`;
}
