import { Component, input } from '@angular/core';


// Componente para mostrar una lista de juegos
//track game.id es para que angular pueda identificar cada elemento de la lista de manera unica y optimizar el rendimiento al renderizar la lista

@Component({
  selector: 'app-game',
  imports: [],
  template: `
    <h2>Game List</h2>
    <ul>
    @for (game of games; track game.id) {
      <li>{{ game.name }} - {{ game.genre }}</li>
    }
    </ul>
  `,
  styleUrl: './game.css',
})
export class Game {
  // @input() username = '' el decorador @input sirve para recibir datos desde el componente padre
  // @output() onGameSelect = new EventEmitter<number>(); el decorador @output sirve para enviar datos al componente padre mediante eventos
  // @placeholder() placeholder = 'Enter game name'; el decorador @placeholder sirve para definir un texto de ayuda en un input
  // @loading() isLoading = false; el decorador @loading sirve para indicar si un componente esta en estado de carga
games = [
  {id: 1, name: 'The Legend of Zelda: Breath of the Wild', genre: 'Action-adventure'},
  {id: 2, name: 'God of War', genre: 'Action'},
  {id: 3, name: 'Red Dead Redemption 2', genre: 'Action-adventure'},
  {id: 4, name: 'The Witcher 3: Wild Hunt', genre: 'RPG'},
  {id: 5, name: 'Minecraft', genre: 'Sandbox'},
]
}
