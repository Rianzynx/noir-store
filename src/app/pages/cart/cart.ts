import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Minus, Plus, X, ArrowLeft, ShoppingBag } from 'lucide-angular';
import { CartService } from '../../services/cart-temp';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './cart.html'
})
export class CartPage {
  readonly icons = { Minus, Plus, X, ArrowLeft, ShoppingBag };
  cart = inject(CartService); // Injeção limpa do serviço

  formatPrice(price: number) {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}