import { Component, AfterViewInit, ElementRef } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-plans',
  standalone: true,
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css'],
})    
export class PlansComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const drawPath = this.el.nativeElement.querySelector('#drawPath');

    gsap.fromTo(
      drawPath,
      { strokeDashoffset: 1000 },
      {
        strokeDashoffset: 0,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: this.el.nativeElement.querySelector('.line-wrapper'),
          start: 'top 80%',
        },
        onComplete: () => {
          gsap.to('.step-1', { opacity: 1, y: 0, duration: 0.6, delay: 0.3 });
          gsap.to('.step-2', { opacity: 1, y: 0, duration: 0.6, delay: 0.6 });
        },
      }
    );
  }
}
