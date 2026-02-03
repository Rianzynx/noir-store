import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, ArrowLeft, CreditCard, Lock, Check } from 'lucide-angular';
import { CartService } from '../../services/cart-temp';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, LucideAngularModule],
  templateUrl: './checkout.html'
})
export class CheckoutPage {
  readonly icons = { ArrowLeft, CreditCard, Lock, Check };
  cart = inject(CartService);

  // Estados da página
  step = signal(1);
  shippingMethod = signal('standard');

  // Cálculos dinâmicos baseados no frete escolhido
  shippingCost = () => {
    const subtotal = this.cart.subtotal();
    if (this.shippingMethod() === 'express') return 49.90;
    return subtotal > 500 ? 0 : 29.90;
  };

  total = () => this.cart.subtotal() + this.shippingCost();

  formatPrice(price: number) {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  nextStep() {
    this.step.update(s => s + 1);
    window.scrollTo(0, 0);
  }
}