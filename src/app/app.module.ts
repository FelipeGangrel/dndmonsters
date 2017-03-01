import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Storage } from '@ionic/storage';
import { DataService } from '../providers/data.service';

import { MonstrosPage } from '../pages/monstros/monstros';
import { MonstroPage } from '../pages/monstro/monstro';
import { MagiasPage } from '../pages/magias/magias';
import { MagiaPage } from '../pages/magia/magia';


import { ArmasMeleePage } from '../pages/armas-melee/armas-melee';
import { ArmasMeleeSimplePage } from '../pages/armas-melee-simple/armas-melee-simple';
import { ArmasMeleeMartialPage } from '../pages/armas-melee-martial/armas-melee-martial';

import { ArmasRangedPage } from '../pages/armas-ranged/armas-ranged';
import { ArmasRangedSimplePage } from '../pages/armas-ranged-simple/armas-ranged-simple';
import { ArmasRangedMartialPage } from '../pages/armas-ranged-martial/armas-ranged-martial';
import { ArmasFirePage } from '../pages/armas-fire/armas-fire';

import { TabsPage } from '../pages/tabs/tabs';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '77e02911'
  }
};


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    MonstrosPage,
    MagiasPage,
    MagiaPage,
    MonstroPage,
    ArmasMeleePage,
    ArmasMeleeSimplePage,
    ArmasMeleeMartialPage,
    ArmasRangedPage,
    ArmasRangedSimplePage,
    ArmasRangedMartialPage,
    ArmasFirePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    MonstrosPage,
    MagiasPage,
    MagiaPage,
    MonstroPage,
    ArmasMeleePage,
    ArmasMeleeSimplePage,
    ArmasMeleeMartialPage,
    ArmasRangedPage,
    ArmasRangedSimplePage,
    ArmasRangedMartialPage,
    ArmasFirePage
  ],
  providers: [Storage, DataService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
