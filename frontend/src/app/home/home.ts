import { Component } from '@angular/core';
import { AuthService, User } from '../auth.service';
import { Footer } from '../template/footer/footer';
import { Header } from '../template/header/header';
import { CtaSection } from './section/cta-section/cta-section';
import { HeroSection } from './section/hero-section/hero-section';
import { AboutSection } from './section/about-section/about-section';
import { ServicesSection } from './section/services-section/services-section';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'], // ou .scss
  standalone: true,
  imports: [Header,Footer,CtaSection,HeroSection,AboutSection,ServicesSection],
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
