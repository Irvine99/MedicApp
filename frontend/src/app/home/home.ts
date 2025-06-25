import { Component } from '@angular/core';
import { AuthService, User } from '../auth.service';
import { Footer } from '../template/footer/footer';
import { Header } from '../template/header/header';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'], // ou .scss
  standalone: true,
  imports: [Header,Footer],
   // ajoute CommonModule si tu utilises *ngIf etc
})
export class HomeComponent {
  user: User | null = null;

  constructor(private authService: AuthService) {
    this.user = this.authService.getCurrentUser();
  }

  logout() {
    this.authService.logout();
    // Optionnel : rediriger vers login
  }
}
