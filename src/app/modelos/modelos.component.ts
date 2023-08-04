import { Component } from '@angular/core';
import { Animal } from './animal';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.css']
})
export class ModelosComponent {
  public name:string='Componente de modelos';
  public title:string='Lista de animales';
  public animales:Array<Animal>;
  constructor(){
    this.animales=[
      new Animal('Ramon','Perro',6,false),
      new Animal('Estrella','Gato',10,true),
      new Animal('Rodney','Pescao',2,false),
    ]
  };
}
