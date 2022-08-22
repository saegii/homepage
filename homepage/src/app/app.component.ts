import { Component } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'homepage';
  items: MenuItem[] = [];
  activeItem: MenuItem = this.items[0];

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/home'] },
      { label: 'Blog', icon: 'pi pi-fw pi-book', routerLink: ['/blog'] },
      { label: 'Newsletter', icon: 'pi pi-fw pi-envelope', routerLink: ['/news'] },
      { label: 'Mini-Games', icon: 'pi pi-fw pi-play', routerLink: ['/mini-games'] }
    ];
    this.activeItem = this.items[0];
  }
  
}
