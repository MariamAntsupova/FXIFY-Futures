import { Component } from '@angular/core';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { BackgroundComponent } from "./components/background/background.component";
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from "./components/home/home.component";
import { CommonModule } from '@angular/common';
import { RouterOutlet,Router,NavigationEnd } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PreloaderComponent, BackgroundComponent, FooterComponent, HomeComponent, CommonModule, NavBarComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isHomePage = true;

  constructor(private router: Router,private cd: ChangeDetectorRef) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = this.router.url === '/';
        this.cd.detectChanges();
      }
    });
  }
}
