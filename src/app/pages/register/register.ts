import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { LucideAngularModule, Eye, EyeOff, Check } from 'lucide-angular';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, LucideAngularModule],
  templateUrl: './register.html'
})
export class RegisterPage {
  registerForm: FormGroup;
  showPassword = false;
  showConfirmPassword = false;
  isLoading = false;

  readonly EyeIcon = Eye;
  readonly EyeOffIcon = EyeOff;
  readonly CheckIcon = Check;

  passwordRequirements = [
    { id: 'length', label: 'Mínimo 8 caracteres', regex: /.{8,}/ },
    { id: 'uppercase', label: 'Uma letra maiúscula', regex: /[A-Z]/ },
    { id: 'lowercase', label: 'Uma letra minúscula', regex: /[a-z]/ },
    { id: 'number', label: 'Um número', regex: /[0-9]/ },
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      password: ['', [Validators.required]],
      confirmPassword: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    }, { validators: this.passwordMatchValidator });
  }

  // Validador customizado para confirmar se as senhas são iguais
  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  isRequirementMet(regex: RegExp): boolean {
    const password = this.registerForm.get('password')?.value || '';
    return regex.test(password);
  }

  async onSubmit() {
    if (this.registerForm.valid) {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(['/login']);
      }, 1500);
    }
  }
}