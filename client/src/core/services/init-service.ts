import { inject, Service } from '@angular/core';
import { of } from 'rxjs';
import { AccountService } from './account-service';

@Service()
export class InitService {
  private accountService = inject(AccountService);

  init() {
    const userString = localStorage.getItem('user');
    if (!userString) return of(null);
    const user = JSON.parse(userString);
    this.accountService.currentUser.set(user);
    return of(null);
  }
}
