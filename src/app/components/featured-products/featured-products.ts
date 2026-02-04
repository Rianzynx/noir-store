import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Heart } from 'lucide-angular';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './featured-products.html'
})
export class FeaturedProducts {
  readonly HeartIcon = Heart;
  
  hoveredId: number | null = null;

  products = [
    {
      id: 1,
      name: "Blazer Estruturado",
      price: "R$ 890,00",
      image: "images/product-1.jpg", 
      category: "Blazers",
    },
    {
      id: 2,
      name: "Camisa Clássica",
      price: "R$ 320,00",
      image: "images/product-2.jpg",
      category: "Camisas",
    },
    {
      id: 3,
      name: "Vestido Midi",
      price: "R$ 680,00",
      image: "images/product-3.jpg",
      category: "Vestidos",
    },
    {
      id: 4,
      name: "Calça Alfaiataria",
      price: 450,
      image: "images/product-4.jpg",
      category: "feminino",
      type: "calcas",
    },
  ];
}