import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import {FORM_PROVIDERS} from '@angular/common';
//import {RouterActive} from './common/directives/router-active';
//test
import { AboutComponent } from './+about/index';
import { LoginComponent } from './+login/index';
import { HomeComponent } from './+home/index';
import { NameListService, NavbarComponent, ToolbarComponent } from './shared/index';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'app',
  viewProviders: [...FORM_PROVIDERS],
  templateUrl: 'app.component.html',
  styles: [`
    footer {
      margin: 30px;
      text-align:center;
    }
  `],
  pipes: [],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  { path: '/', component: HomeComponent},
  { path: '/home', component: HomeComponent}
  //{ path: '/**', redirectTo: ['Index'] }
])
export class AppComponent {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular DEMO - 问卷系统';
  url = 'https://github.com/gf-rd';
  constructor(){}
}
