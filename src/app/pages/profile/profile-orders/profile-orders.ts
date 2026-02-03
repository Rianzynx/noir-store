import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../../../services/profile';
import { Order } from '../../../models/order.model';
import { LucideAngularModule, ExternalLink } from 'lucide-angular';

@Component({
  selector: 'app-profile-orders',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './profile-orders.html'
})
export class ProfileOrders implements OnInit {
  orders: Order[] = [];
  readonly ExternalIcon = ExternalLink;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.getOrders().subscribe(data => {
      this.orders = data;
    });
  }
}