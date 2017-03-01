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




@NgModule({
  declarations: [
    MyApp,
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
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
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
