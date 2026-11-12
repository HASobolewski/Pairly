import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../core/services/account-service';

@Component({
  imports: [FormsModule],
  selector: 'app-nav',
  styleUrl: './nav.css',
  templateUrl: './nav.html',
})
export class Nav {
  protected accountService = inject(AccountService);
  protected credentials: any = {};

  login() {
    this.accountService.login(this.credentials).subscribe({
      next: () => (this.credentials = {}),
      error: (error) => alert(error.message),
    });
  }

  logout() {
    this.accountService.logout();
  }
}
