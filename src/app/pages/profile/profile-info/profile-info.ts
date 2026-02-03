import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LucideAngularModule, Save, User, Mail, Phone, MapPin } from 'lucide-angular';

@Component({
  selector: 'app-profile-info',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LucideAngularModule],
  templateUrl: './profile-info.html'
})
export class ProfileInfo {
  profileForm: FormGroup;

  readonly SaveIcon = Save;
  readonly UserIcon = User;
  readonly MailIcon = Mail;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: ['Rian', [Validators.required]],
      lastName: ['Alves', [Validators.required]],
      email: ['rian.alves@email.com', [Validators.required, Validators.email]],
      phone: ['(11) 99999-0000'],
      birthDate: ['2001-11-04']
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log('Dados salvos:', this.profileForm.value);
    }
  }
}