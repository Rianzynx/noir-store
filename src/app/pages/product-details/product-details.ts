import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LucideAngularModule, Heart, Minus, Plus, ArrowLeft, Truck, RefreshCw, Shield, ChevronDown } from 'lucide-angular';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './product-details.html'
})
export class ProductDetailPage implements OnInit {
  readonly icons = { ArrowLeft, Minus, Plus, Heart, Truck, RefreshCw, Shield, ChevronDown };

  products = [
    {
      id: 1,
      name: "Blazer Estruturado",
      price: 890, category: "Blazers",
      images: ["images/product-1.jpg",
        "images/product-2.jpg"],
      colors: ["Preto", "Cinza"],
      sizes: ["P", "M", "G"],
      description: "Blazer de corte estruturado...",
      material: "65% Poliéster",
      care: "Lavar a seco"
    },
    {
      id: 2,
      name: "Camisa Clássica",
      price: 320,
      description: "Camisa clássica em algodão egípcio de alta qualidade. Corte ajustado com acabamento impecável. Ideal para o dia a dia e eventos mais formais.",
      image: "/images/product-2.jpg",
      images: ["/images/product-2.jpg", "/images/product-1.jpg"],
      category: "Camisas",
      sizes: ["PP", "P", "M", "G", "GG"],
      colors: ["Branco", "Azul Claro", "Rosa"],
      material: "100% Algodão Egípcio",
      care: "Lavar a máquina em água fria",
    },
    {
      id: 3,
      name: "Vestido Midi",
      price: 680,
      description: "Vestido midi elegante com corte fluido. Design atemporal que transita do escritório ao happy hour com facilidade. Fechamento em zíper invisível nas costas.",
      image: "/images/product-3.jpg",
      images: ["/images/product-3.jpg", "/images/product-1.jpg"],
      category: "Vestidos",
      sizes: ["PP", "P", "M", "G"],
      colors: ["Preto", "Verde Escuro", "Bordô"],
      material: "100% Viscose",
      care: "Lavar a mão em água fria",
    },
  ];

  product: any;
  selectedSize = '';
  selectedColor = '';
  selectedImageIndex = 0;
  quantity = 1;
  showDetails = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Pega o ID da URL: /products/1
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.product = this.products.find(p => p.id === id) || this.products[0];
      this.selectedColor = this.product.colors[0];
    });
  }

  formatPrice(price: number) {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  changeQuantity(amount: number) {
    this.quantity = Math.max(1, this.quantity + amount);
  }
}