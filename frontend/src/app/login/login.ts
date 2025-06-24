import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',

  imports: [
    CommonModule,
    FormsModule,
       
  ],
  templateUrl: './login.html',
})
export class LoginComponent {
  username = '';
  password = '';
  message = '';
  error = false;

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login({ username: this.username, password: this.password })
      .subscribe({
        next: () => {
          this.message = 'Connexion réussie !';
          this.error = false;
        },
        error: () => {
          this.message = 'Identifiants invalides.';
          this.error = true;
        }
      });
  }
}
