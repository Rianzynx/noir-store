import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Heart, SlidersHorizontal, X, ChevronDown } from 'lucide-angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule, FormsModule],
  templateUrl: './products.html'
})
export class ProductsPage {
  readonly icons = { Heart, SlidersHorizontal, X, ChevronDown };

  selectedCategory = 'all';
  selectedSort = 'recent';
  showFilters = false;
  hoveredId: number | null = null;

  allProducts = [
    {
      id: 1,
      name: "Blazer Estruturado",
      price: 890,
      image: "images/product-1.jpg",
      category: "feminino",
      type: "blazers",
    },
    {
      id: 2,
      name: "Camisa Clássica",
      price: 320,
      image: "images/product-2.jpg",
      category: "feminino",
      type: "camisas",
    },
    {
      id: 3,
      name: "Vestido Midi",
      price: 680,
      image: "images/product-3.jpg",
      category: "feminino",
      type: "vestidos",
    },
    {
      id: 4,
      name: "Calça Alfaiataria",
      price: 450,
      image: "images/product-4.jpg",
      category: "feminino",
      type: "calcas",
    },
    {
      id: 5,
      name: "T-Shirt Premium",
      price: 180,
      image: "images/product-5.jpg",
      category: "masculino",
      type: "camisetas",
    },
    {
      id: 6,
      name: "Casaco Longo",
      price: 1290,
      image: "images/product-6.jpg",
      category: "feminino",
      type: "casacos",
    },
    {
      id: 7,
      name: "Blazer Slim",
      price: 920,
      image: "images/product-1.jpg",
      category: "masculino",
      type: "blazers",
    },
    {
      id: 8,
      name: "Camisa Social",
      price: 280,
      image: "images/product-2.jpg",
      category: "masculino",
      type: "camisas",
    },
  ];

  categories = [
    { label: "Todos", value: "all" },
    { label: "Feminino", value: "feminino" },
    { label: "Masculino", value: "masculino" },
  ];

  sortOptions = [
    { label: "Mais Recentes", value: "recent" },
    { label: "Menor Preço", value: "price-asc" },
    { label: "Maior Preço", value: "price-desc" },
  ];

  // Getter que filtra e ordena os produtos automaticamente quando as variáveis mudam
  get filteredProducts() {
    let products = this.allProducts.filter(
      p => this.selectedCategory === 'all' || p.category === this.selectedCategory
    );

    if (this.selectedSort === 'price-asc') products.sort((a, b) => a.price - b.price);
    if (this.selectedSort === 'price-desc') products.sort((a, b) => b.price - a.price);

    return products;
  }

  formatPrice(price: number) {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}