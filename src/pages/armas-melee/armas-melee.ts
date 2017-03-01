import { Component } from '@angular/core';

import { ArmasMeleeSimplePage } from '../armas-melee-simple/armas-melee-simple';
import { ArmasMeleeMartialPage } from '../armas-melee-martial/armas-melee-martial';



@Component({
  templateUrl: 'armas-melee.html'
})
export class ArmasMeleePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ArmasMeleeSimplePage;
  tab2Root: any = ArmasMeleeMartialPage;
  

  constructor() {

  }
}
