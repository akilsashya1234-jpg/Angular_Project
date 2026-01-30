import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Home } from './pages/home/home'; 
import { About } from './pages/about/about'; 
import { Contact } from './pages/contact/contact';
// import { PageNotFound } from './pages/page-not-found/page-not-found';
import { Menu } from './shared/menu/menu';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Menu, Home, About, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Route');

}
