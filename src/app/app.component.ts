import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { FavoritosProvider } from '../providers/favoritos.provider';

import { MonstrosPage } from '../pages/monstros/monstros';
import { MagiasPage } from '../pages/magias/magias';
import { ArmasMeleePage } from '../pages/armas-melee/armas-melee';
import { ArmasRangedPage } from '../pages/armas-ranged/armas-ranged';


@Component({
  templateUrl: 'app.html',
  providers: [FavoritosProvider]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  public activePage: string = 'monsters';
  public rootPage: any = MonstrosPage;

  pages: Array<{title: string, classe: string, component: any}>;

  constructor(
    public platform: Platform, 
    public favoritosProv: FavoritosProvider) {
    
    this.initializeApp();

    this.pages = [
      { title: 'Monsters', classe: 'monsters', component: MonstrosPage },
      { title: 'Spells',  classe: 'spells', component: MagiasPage },
      { title: 'Melee Weapons',  classe: 'melee', component: ArmasMeleePage },
      { title: 'Ranged Weapons',  classe: 'ranged', component: ArmasRangedPage },
    ];

  }
  
  isActive(classe: string){
    return classe == this.activePage ? 'active' : '';
  }

  initializeApp(){
    this.platform.ready().then(() => {
      StatusBar.overlaysWebView(false);
      StatusBar.backgroundColorByHexString('#27ae60');
      Splashscreen.hide();
    });
  }

  openPage(page: any){
    this.activePage = page.classe;
    this.nav.setRoot(page.component);
  }

}
