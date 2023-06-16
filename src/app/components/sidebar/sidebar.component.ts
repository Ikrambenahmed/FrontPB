import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUT: RouteInfo[] = [

    { path: '/demande-list', title: 'List Demande',  icon:'filter_list', class: '' },
    { path: '/user-profile', title: 'Profil',  icon:'person', class: '' },
    { path: '/Listusers', title: 'Liste des utilisateurs',  icon:'filter_list', class: '' },
    { path: '/transaction', title: 'List Transaction',  icon:'filter_list', class: '' },

    
    /*{ path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },*/
];

export const ROUTES: RouteInfo[] = [

  { path: '/demande-creation', title: 'POWER BI',  icon:'add_circle', class: '' },
  { path: '/user-profile', title: 'Profil',  icon:'person', class: '' },

  


  
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
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);

    this.menu=  ROUT.filter(menuItem => menuItem);

    this.role= localStorage.getItem('ROLE');

  }
  
}
