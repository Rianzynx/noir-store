import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, CreditCard, Plus, Trash2, ShieldCheck } from 'lucide-angular';

interface PaymentMethod {
  id: string;
  brand: string;
  lastFour: string;
  expiry: string;
  isDefault: boolean;
}

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './profile-payment.html',
})
export class ProfilePayment{
  readonly icons = { CreditCard, Plus, Trash2, ShieldCheck };

  methods = signal<PaymentMethod[]>([
    {
      id: '1',
      brand: 'VISA',
      lastFour: '4242',
      expiry: '12/27',
      isDefault: true
    },
    {
      id: '2',
      brand: 'MASTERCARD',
      lastFour: '8812',
      expiry: '06/26',
      isDefault: false
    }
  ]);

  deleteMethod(id: string) {
    if (confirm('Deseja remover este cartão?')) {
      this.methods.update(m => m.filter(item => item.id !== id));
    }
  }
}