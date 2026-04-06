import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';
import { Game } from './game/game';

//Aqui es donde se describira el componente principal de la aplicacion
@Component({
  selector: 'app-root',  ///Selector del componente principal es el mismo que encontramos en el index.html
  imports: [RouterOutlet, User, Game], // modulo de enrutamiento para manejar las rutas hijas
  templateUrl: './app.html',  // lo que se va a renderizar en el index.html

  // template: '', // este es otro metodo para definir el template directamente desde aca sin pasar ninguna ruta
  styleUrl: './app.css' // estilos del componente principal

  // cuando usamos {{ }} en el template estamos haciendo data binding, es decir vinculando datos de la clase del componente con la vista
  // asi mismo podemos poner codigo javaScript dentro de las llaves para hacer operaciones y mostrar el resultado en la vista
  //ejemplo: {{ 1 + 1 }} mostrara 2 en la vista

// tambien podemos usar componentes de angular dentro del template, por ejemplo si queremos usar un componente hijo llamado app-user
// simplemente ponemos <app-user></app-user> dentro del template y angular se encargara de renderizarlo
// muy importante se debe importar el componente hijo en el array de imports del componente padre para que angular lo reconozca

})
export class App {
  protected readonly title = signal('angular');
}
