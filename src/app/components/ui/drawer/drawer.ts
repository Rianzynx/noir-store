import { Component, Input, signal, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drawer.html',
  styleUrl: './drawer.css'
})
export class Drawer {
  // Estados usando Signals
  isOpen = signal(false);

  // 'right' para carrinho, 'bottom' para mobile menu
  @Input() direction: 'left' | 'right' | 'top' | 'bottom' = 'right';
  
  @Output() close = new EventEmitter<void>();

  open() {
    this.isOpen.set(true);
    document.body.style.overflow = 'hidden'; 
  }

  toggle() {
    this.isOpen() ? this.closeDrawer() : this.open();
  }

  closeDrawer() {
    this.isOpen.set(false);
    document.body.style.overflow = 'auto';
    this.close.emit();
  }
}