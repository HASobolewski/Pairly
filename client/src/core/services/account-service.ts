import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { tap } from 'rxjs';
import { LoginCredentials, RegisterCredentials, User } from '../../types/user';

@Service()
export class AccountService {
  private httpClient = inject(HttpClient);
  currentUser = signal<User | null>(null);

  baseUrl = 'https://localhost:5001/api/';

  login(credentials: LoginCredentials) {
    return this.httpClient.post<User>(this.baseUrl + 'account/login', credentials).pipe(
      tap((user) => {
        if (user) {
          this.setCurrentUser(user);
        }
      }),
    );
  }

  register(credentials: RegisterCredentials) {
    return this.httpClient.post<User>(this.baseUrl + 'account/register', credentials).pipe(
      tap((user) => {
        if (user) {
          this.setCurrentUser(user);
        }
      }),
    );
  }

  setCurrentUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUser.set(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }
}
