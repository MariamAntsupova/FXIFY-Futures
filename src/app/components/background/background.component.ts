import { Component, HostListener, Renderer2 } from '@angular/core';
import { ParticlesComponent } from '../particles/particles.component';

@Component({
  selector: 'app-background',
  imports: [ParticlesComponent],
  templateUrl: './background.component.html',
  styleUrl: './background.component.css'
})
export class BackgroundComponent {
constructor(private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    const container = document.getElementById('aurora-stars-container');
    if (!container) return;

    const count = Math.floor(Math.random() * 2) + 1;
    for (let i = 0; i < count; i++) {
      const star = this.renderer.createElement('div');
      this.renderer.addClass(star, 'aurora-star');

      const left = Math.random() * window.innerWidth;
      const top = Math.random() * window.innerHeight;

      this.renderer.setStyle(star, 'left', `${left}px`);
      this.renderer.setStyle(star, 'top', `${top}px`);
      this.renderer.setStyle(star, 'animation-delay', `${Math.random() * 1}s`);

      this.renderer.appendChild(container, star);

      setTimeout(() => {
        this.renderer.removeChild(container, star);
      }, 10000);
    }
  }
}
