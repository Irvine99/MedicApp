import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


// Import de zone.js pour le support de Angular

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule], // HttpClientModule retiré
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected title = 'frontend';
}
