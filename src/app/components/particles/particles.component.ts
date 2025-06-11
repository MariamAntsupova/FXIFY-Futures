import { Component ,Renderer2 , OnInit,ElementRef,HostListener} from '@angular/core';

@Component({
  selector: 'app-particles',
  imports: [],
  templateUrl: './particles.component.html',
  styleUrl: './particles.component.css'
})
export class ParticlesComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

ngOnInit(): void {
    this.createStars(400);
  }

  createStars(numStars: number): void {
    const starsLayer = this.el.nativeElement.querySelector('#starsLayer');

    for (let i = 0; i < numStars; i++) {
      const star = this.renderer.createElement('div');
      this.renderer.addClass(star, 'star');
      this.renderer.setStyle(star, 'top', `${Math.random() * 100}%`);
      this.renderer.setStyle(star, 'left', `${Math.random() * 100}%`);
      this.renderer.appendChild(starsLayer, star);
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const starsLayer = this.el.nativeElement.querySelector('#starsLayer');
    const rect = starsLayer.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const stars = this.el.nativeElement.querySelectorAll('.star');
    stars.forEach((star: HTMLElement) => {
      const starRect = star.getBoundingClientRect();
      const starX = starRect.left + starRect.width / 2;
      const starY = starRect.top + starRect.height / 2;

      const distanceX = Math.abs(mouseX - starX);
      const distanceY = Math.abs(mouseY - starY);

      if (distanceX < 100 && distanceY < 100) {
        const scale = 1.5 - Math.max(distanceX, distanceY) / 200;
        this.renderer.setStyle(star, 'transform', `scale(${scale})`);
        this.renderer.setStyle(star, 'opacity', '1');
      } else {
        this.renderer.setStyle(star, 'transform', 'scale(1)');
        this.renderer.setStyle(star, 'opacity', '0.6');
      }
    });
  }
}
