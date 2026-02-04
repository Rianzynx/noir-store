import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ArrowLeft, ArrowRight } from 'lucide-angular';
import EmblaCarousel, { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css'
})
export class Carousel {
  @ViewChild('emblaRef', { static: true }) emblaRef!: ElementRef;
  
  @Input() options: EmblaOptionsType = { loop: true, align: 'start' };
  
  private emblaApi?: EmblaCarouselType;
  
  // Icons
  readonly ArrowLeftIcon = ArrowLeft;
  readonly ArrowRightIcon = ArrowRight;

  // Signals (Angular 21)
  canScrollPrev = signal(false);
  canScrollNext = signal(false);

  ngAfterViewInit() {
    this.emblaApi = EmblaCarousel(this.emblaRef.nativeElement, this.options);
    
    this.emblaApi.on('select', () => this.updateState());
    this.emblaApi.on('reInit', () => this.updateState());
    this.updateState();
  }

  private updateState() {
    if (!this.emblaApi) return;
    this.canScrollPrev.set(this.emblaApi.canScrollPrev());
    this.canScrollNext.set(this.emblaApi.canScrollNext());
  }

  scrollPrev() {
    this.emblaApi?.scrollPrev();
  }

  scrollNext() {
    this.emblaApi?.scrollNext();
  }

  ngOnDestroy() {
    this.emblaApi?.destroy();
  }
}