import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ArrowRight } from 'lucide-angular';

@Component({
  selector: 'app-collection-banner',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './collection-banner.html'
})
export class CollectionBanner {
  readonly ArrowIcon = ArrowRight;
}