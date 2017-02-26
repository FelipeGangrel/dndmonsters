import { Component } from '@angular/core';

import { MonstrosPage } from '../monstros/monstros';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = MonstrosPage;

  constructor() {

  }
}
