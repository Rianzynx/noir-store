import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme';

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
  imports: [CommonModule, RouterModule, LucideAngularModule],
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

  isMenuOpen = false;

  constructor(public themeService: ThemeService) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}