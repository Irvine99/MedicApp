import { CommonModule } from '@angular/common'; // Pour *ngIf
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.html',
  imports: [CommonModule, FormsModule],
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';
  message = '';
  error = false;

  constructor(private http: HttpClient) {}

  onRegister() {
      console.log('onRegister() déclenché');

      // Test : simuler une réponse
      this.message = 'Formulaire soumis (test)';
      this.error = false;

    if (!this.username || !this.password) {
      this.message = "Veuillez remplir tous les champs obligatoires.";
      this.error = true;
      return;
    }

    const payload = {
      username: this.username,
      email: this.email,
      password: this.password,
    };

    this.http.post<any>('/api/register', payload).subscribe({
      next: (res) => {
        this.message = 'Inscription réussie !';
        this.error = false;
        // Optionnel : reset des champs
        this.username = '';
        this.email = '';
        this.password = '';
      },
      error: (err) => {
        this.message = 'Erreur lors de l’inscription. Veuillez réessayer.';
        this.error = true;
      },
    });
  };

  onClick() {
    console.log('onClick() déclenché');
    // Logique pour le clic, si nécessaire
  }
}
