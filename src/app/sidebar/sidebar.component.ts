import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sideBarMenuItems } from './sidebar.constants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  menuItems: any = sideBarMenuItems;
  selectedIndex: number = 0;
  constructor(private router: Router) {}

  ngOnInit(): void {
    let location = window.location.href;
    this.menuItems.forEach((item: any) => {
      if (location.includes(item.routeLink)) {
        this.selectedIndex = item.id;
      }
    });
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
