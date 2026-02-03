import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MapPin, Plus, Edit2, Trash2 } from 'lucide-angular';

interface Address {
  id: string;
  title: string;
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  zip: string;
  isDefault: boolean;
}

@Component({
  selector: 'app-addresses',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './profile-addresses.html'
})
export class ProfileAddresses {
  readonly icons = { Plus, MapPin, Edit2, Trash2 };
  
  addresses = signal<Address[]>([
    {
      id: '1',
      title: 'CASA',
      street: 'Rua das Flores, 123',
      neighborhood: 'Jardim Paulista',
      city: 'São Paulo',
      state: 'SP',
      zip: '01401-000',
      isDefault: true,
    },
    {
      id: '2',
      title: 'TRABALHO',
      street: 'Av. Paulista, 1000 - 10º andar',
      neighborhood: 'Bela Vista',
      city: 'São Paulo',
      state: 'SP',
      zip: '01310-100',
      isDefault: false,
    }
  ]);

  setDefault(id: string) {
    this.addresses.update(items => 
      items.map(addr => ({ ...addr, isDefault: addr.id === id }))
    );
  }

  deleteAddress(id: string) {
    if (confirm('Deseja remover este endereço?')) {
      this.addresses.update(items => items.filter(addr => addr.id !== id));
    }
  }
}