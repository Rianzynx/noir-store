import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, ArrowUpRight } from 'lucide-angular';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './categories.html'
})
export class Categories {
  readonly ArrowIcon = ArrowUpRight;

  categories = [
    { name: "Blazers & Casacos", count: "24 produtos", href: "/products?category=blazers" },
    { name: "Vestidos", count: "36 produtos", href: "/products?category=vestidos" },
    { name: "Camisas & Blusas", count: "42 produtos", href: "/products?category=camisas" },
    { name: "Calças & Saias", count: "28 produtos", href: "/products?category=calcas" },
  ];

  // Função para formatar o número (ex: 1 vira 01)
  padIndex(index: number): string {
    return String(index + 1).padStart(2, "0");
  }
}