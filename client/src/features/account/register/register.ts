import { Component, inject, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../../core/services/account-service';
import { RegisterCredentials } from '../../../types/user';

@Component({
  imports: [FormsModule],
  selector: 'app-register',
  styleUrl: './register.css',
  templateUrl: './register.html',
})
export class Register {
  private accountService = inject(AccountService);
  cancelRegister = output<boolean>();
  protected credentials = {} as RegisterCredentials;

  register() {
    this.accountService.register(this.credentials).subscribe({
      next: () => this.cancel(),
      error: (error) => alert(error.message),
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
