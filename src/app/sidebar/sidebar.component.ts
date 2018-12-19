import { Component, OnInit } from '@angular/core';
import { faSearch, faUser, faBell, faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  faSearch = faSearch;
  faUser = faUser;
  faBell = faBell;
  faChevronDown = faChevronDown;
  user = 'Sandra Oliveira';
  numeroNotificacao = 3;
  grupo: any[] = ['Visão Agregada 1', 'Visão Agregada 2', 'Visão Agregada 3'];
  constructor() { }

  ngOnInit() {
  }

}
