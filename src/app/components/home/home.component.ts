import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FxifyFuturesComponent } from '../fxify-futures/fxify-futures.component';
import { PlansComponent } from '../plans/plans.component';
import { HowItWorksComponent } from '../how-it-works/how-it-works.component';
import { AffiliateComponent } from '../affiliate/affiliate.component';
import { ChartsComponent } from '../charts/charts.component';

@Component({
  selector: 'app-home',
  imports: [NavBarComponent,FxifyFuturesComponent,PlansComponent,HowItWorksComponent,AffiliateComponent,ChartsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
