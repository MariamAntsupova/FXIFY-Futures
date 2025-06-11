import { Component } from '@angular/core';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { BackgroundComponent } from "./components/background/background.component";
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PreloaderComponent, HomeComponent,BackgroundComponent,FooterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
