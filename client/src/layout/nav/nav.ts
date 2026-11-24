import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AccountService } from '../../core/services/account-service';
import { ToastService } from '../../core/services/toast-service';

@Component({
  imports: [FormsModule, RouterLink, RouterLinkActive],
  selector: 'app-nav',
  styleUrl: './nav.css',
  templateUrl: './nav.html',
})
export class Nav {
  private router = inject(Router);
  private toastService = inject(ToastService);
  protected accountService = inject(AccountService);
  protected credentials: any = {};

  login() {
    this.accountService.login(this.credentials).subscribe({
      next: () => {
        this.credentials = {};
        this.toastService.success('Logged in successfully');
        this.router.navigateByUrl('/members');
      },
      error: (error) => {
        this.toastService.error(error.error);
      },
    });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
