import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
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
