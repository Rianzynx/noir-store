import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs/operators';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Footer, RouterModule],
  template: `
    <app-header></app-header>
    
    <main class="min-h-screen  bg-background">
      <router-outlet></router-outlet>
    </main>
    
    <app-footer></app-footer>
  `
})
export class App implements OnInit {
  private destroyRef = inject(DestroyRef);
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(() => {
      window.scrollTo(0, 0);
    });
  }
}