import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

export interface User {
  username: string;
  email: string;
  // autres champs selon ta réponse API
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8000/api';
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Charger user en localStorage si présent (uniquement côté navigateur)
    if (isPlatformBrowser(this.platformId)) {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        this.currentUserSubject.next(JSON.parse(savedUser));
      }
    }
  }

  register(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register/`, data);
  }

  login(data: { username: string; password: string }): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/login/`, data).pipe(
      tap(user => {
        localStorage.setItem('user', JSON.stringify(user));  // stocker user
        this.currentUserSubject.next(user);                   // notifier observateurs
      })
    );
  }

  logout(): void {
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
    // Tu peux aussi appeler ton endpoint logout si besoin (this.http.post...)
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }
}
