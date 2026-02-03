import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from '../models/order.model';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  getOrders(): Observable<Order[]> {
    const orders: Order[] = [
      { id: 'NOI-2026-001', date: '15 Jan 2026', status: 'Entregue', total: 'R$ 1.210,00', items: 2 },
    ];
    return of(orders); 
  }
}