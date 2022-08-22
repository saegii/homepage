import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: MenuItem[] = [];
  activeItem: MenuItem = this.items[0];

  constructor() {

  }

  ngOnInit(): void {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/home'] },
      { label: 'Blog', icon: 'pi pi-fw pi-book', routerLink: ['/blog'] },
      { label: 'Newsletter', icon: 'pi pi-fw pi-envelope', routerLink: ['/news'] },
      { label: 'Mini-Games', icon: 'pi pi-fw pi-play', routerLink: ['/mini-games'] }
    ];
    this.activeItem = this.items[0];
  }

}
