import { Component,HostListener } from '@angular/core';
import { FxifyFuturesComponent } from '../fxify-futures/fxify-futures.component';
import { PlansComponent } from '../plans/plans.component';
import { HowItWorksComponent } from '../how-it-works/how-it-works.component';
import { AffiliateComponent } from '../affiliate/affiliate.component';
import { ChartsComponent } from '../charts/charts.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [FxifyFuturesComponent,PlansComponent,HowItWorksComponent,AffiliateComponent,ChartsComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showScrollButton = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.pageYOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
