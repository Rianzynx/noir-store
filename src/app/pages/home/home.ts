import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Categories } from '../../components/categories/categories';
import { CollectionBanner } from '../../components/collection-banner/collection-banner';
import { FeaturedProducts } from '../../components/featured-products/featured-products';
import { Newsletter } from '../../components/newsletter/newsletter';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, Categories, CollectionBanner, FeaturedProducts, Newsletter],
  template: `
    <app-hero></app-hero>
    <app-categories></app-categories>
    <app-collection-banner></app-collection-banner>
    <app-featured-products></app-featured-products>
    <app-newsletter></app-newsletter>
  `
})
export class Home {}