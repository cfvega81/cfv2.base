import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginValidators } from '@auth/validators/login-validators';
import { cards, controls, forms } from '@packs/material';

@Component({
  selector: 'v2c-login',
  standalone: true,
  imports: [ ...forms, ...cards, ...controls ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {
  forms: FormGroup = new FormGroup(new LoginValidators());

  get username() {
    return this.forms.value.username;
  }

  get password() {
    return this.forms.value.password;
  }

  onClick() {
    this.forms.updateValueAndValidity();
    if (!this.forms.invalid) {
      
    }
  }
}
