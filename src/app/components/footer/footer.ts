import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Instagram, Facebook, Twitter } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './footer.html'
})
export class Footer {
  readonly InstaIcon = Instagram;
  readonly FaceIcon = Facebook;
  readonly TwitterIcon = Twitter;

  footerLinks = {
    shop: [
      { name: "Novidades", href: "/products" },
      { name: "Feminino", href: "/products", query: { category: 'feminino' } },
      { name: "Masculino", href: "/products", query: { category: 'masculino' } },
      { name: "Acessórios", href: "/products", query: { category: 'acessorios' } },
      { name: "Sale", href: "/products" },
    ],
    help: [
      { name: "FAQ", href: "/contact" },
      { name: "Entregas", href: "/contact" },
      { name: "Trocas e Devoluções", href: "/contact" },
      { name: "Rastrear Pedido", href: "/profile" },
      { name: "Contato", href: "/contact" },
    ],
    about: [
      { name: "Nossa História", href: "#" },
      { name: "Sustentabilidade", href: "#" },
      { name: "Carreiras", href: "#" },
      { name: "Imprensa", href: "#" },
    ],
  };
}