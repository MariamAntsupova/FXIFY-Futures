import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

export const routes: Routes = [
     { path: '', component: HomeComponent },
     { path: 'login', component: LogInComponent },
     { path: 'signup', component: SignUpComponent },
];
