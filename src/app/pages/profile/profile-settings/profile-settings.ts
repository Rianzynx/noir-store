import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Bell, Shield, Mail, Trash2, Smartphone } from 'lucide-angular';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './profile-settings.html'
})
export class ProfileSettings {
  readonly icons = { Bell, Shield, Mail, Trash2, Smartphone };

  // Estados dos Toggles
  notifications = signal({
    email: true,
    sms: false,
    promos: true
  });

  toggleNotification(key: 'email' | 'sms' | 'promos') {
    this.notifications.update(n => ({ ...n, [key]: !n[key] }));
  }

  deleteAccount() {
    const confirmed = confirm('Esta ação é permanente. Deseja realmente excluir sua conta NOIR?');
    if (confirmed) {
      console.log('Conta excluída');
    }
  }
}