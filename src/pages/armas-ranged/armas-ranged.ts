import { Component } from '@angular/core';

import { ArmasRangedSimplePage } from '../../pages/armas-ranged-simple/armas-ranged-simple';
import { ArmasRangedMartialPage } from '../../pages/armas-ranged-martial/armas-ranged-martial';
import { ArmasFirePage } from '../armas-fire/armas-fire';

@Component({
  selector: 'page-armas-ranged',
  templateUrl: 'armas-ranged.html'
})
export class ArmasRangedPage {

  tab1Root: any = ArmasRangedSimplePage;
  tab2Root: any = ArmasRangedMartialPage;
  tab3Root: any = ArmasFirePage;

  constructor() {

  }


}
