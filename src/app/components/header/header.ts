import { Component, ViewChild, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme';
import { Drawer } from '../ui/drawer/drawer';
import { ChevronRight, LogOut } from 'lucide-angular';

import {
  LucideAngularModule,
  Menu,
  X,
  ShoppingBag,
  Search,
  User,
  Sun,
  Moon
} from 'lucide-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule, Drawer],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  readonly MenuIcon = Menu;
  readonly XIcon = X;
  readonly ShoppingBagIcon = ShoppingBag;
  readonly SearchIcon = Search;
  readonly UserIcon = User;
  readonly SunIcon = Sun;
  readonly MoonIcon = Moon;
  readonly ChevronRightIcon = ChevronRight;
  readonly LogOutIcon = LogOut;

  @ViewChild('cartDrawer') cartDrawer!: Drawer;
  @ViewChild('mobileMenu') mobileMenu!: Drawer;

  cartItems = signal([
    { id: 1, name: "Blazer Estruturado", price: 890, size: "M", image: "images/product-1.jpg" },
    { id: 2, name: "Camisa Clássica", price: 320, size: "P", image: "images/product-2.jpg"}
  ]);

  totalCart = computed(() => {
    return this.cartItems().reduce((acc, item) => acc + item.price, 0);
  });

  isMenuOpen = false;

  constructor(public themeService: ThemeService) { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    console.log('Usuário deslogado');
  }
}