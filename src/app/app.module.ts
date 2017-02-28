import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Storage } from '@ionic/storage';

import { MonstrosPage } from '../pages/monstros/monstros';
import { MonstroPage } from '../pages/monstro/monstro';
import { MagiasPage } from '../pages/magias/magias';
import { MagiaPage } from '../pages/magia/magia';
import { TabsPage } from '../pages/tabs/tabs';


@NgModule({
  declarations: [
    MyApp,
    MonstrosPage,
    MagiasPage,
    MagiaPage,
    MonstroPage,
    TabsPage
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
    TabsPage
  ],
  providers: [Storage, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
