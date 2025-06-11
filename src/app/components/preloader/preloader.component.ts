import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ParticlesComponent } from "../particles/particles.component";

@Component({
  selector: 'app-preloader',
  imports: [NgIf, ParticlesComponent,ParticlesComponent],
  standalone: true,
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.css'
})
export class PreloaderComponent implements OnInit {
  percentage = 0;
  letters = '';
  fullText = 'FXIFY Futures ™';
  showLoader = true;

  ngOnInit() {
    const percentInterval = setInterval(() => {
      if (this.percentage < 100) {
        this.percentage += 2; 
      } else {
        clearInterval(percentInterval);
        setTimeout(() => this.showLoader = false, 300); 
      }
    }, 30); 

    let i = 0;
    const letterInterval = setInterval(() => {
      if (i < this.fullText.length) {
        this.letters += this.fullText[i];
        i++;
      } else {
        clearInterval(letterInterval);
      }
    }, 60); 
  }
}
