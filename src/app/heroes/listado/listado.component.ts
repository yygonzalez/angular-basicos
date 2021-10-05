import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor'];
  borradoheroes: string = '';

  borrarHeroe(){
    console.log("borrando...");
    this.borradoheroes = this.heroes.shift() || '';
  }
  

  
}
