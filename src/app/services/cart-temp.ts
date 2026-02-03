import { Injectable, signal, computed } from '@angular/core';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  // Usando Signals (Angular 17+) para performance reativa superior
  items = signal<CartItem[]>([
    { id: 1, name: "Blazer Estruturado", price: 890, image: "images/product-1.jpg", size: "M", color: "Preto", quantity: 1 },
    { id: 2, name: "Camisa Clássica", price: 320, image: "images/product-2.jpg", size: "P", color: "Branco", quantity: 2 }
  ]);

  subtotal = computed(() => this.items().reduce((sum, i) => sum + i.price * i.quantity, 0));
  shipping = computed(() => this.subtotal() > 500 || this.items().length === 0 ? 0 : 29.90);
  total = computed(() => this.subtotal() + this.shipping());

  updateQuantity(id: number, delta: number) {
    this.items.update(items => items.map(i => 
      i.id === id ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i
    ));
  }

  removeItem(id: number) {
    this.items.update(items => items.filter(i => i.id !== id));
  }
}