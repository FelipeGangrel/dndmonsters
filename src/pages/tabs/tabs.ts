import { Component } from '@angular/core';

import { MonstrosPage } from '../monstros/monstros';
import { MagiasPage } from '../magias/magias';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = MonstrosPage;
  tab2Root: any = MagiasPage;

  constructor() {

  }
}
