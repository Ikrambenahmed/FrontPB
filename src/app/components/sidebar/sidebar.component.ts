import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUT: RouteInfo[] = [

    { path: '/user-profile', title: 'Profil',  icon:'person', class: '' }

    
    
];

export const ROUTES: RouteInfo[] = [

  { path: '/home', title: 'Report',  icon:'filter_list', class: ''},
  { path: '/user-profile', title: 'Profil',  icon:'person', class: '' },
 // { path: '/user-profile', title: 'Log Out',  icon:'person', class: '' }

  /*{ path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
  { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },*/
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  menu: any[];
role: any; 
logoImageUrl: string = 'assets/carbonFootprint.png';

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);

    this.menu=  ROUT.filter(menuItem => menuItem);

    this.role= localStorage.getItem('ROLE');

  }
  deconnecter(){
    localStorage.setItem('isLoggedin','false');
    localStorage.clear();
    window.location.href = "http://localhost:4200/#/login";
}
}
