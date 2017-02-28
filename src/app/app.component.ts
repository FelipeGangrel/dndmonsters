import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { FavoritosProvider } from '../providers/favoritos.provider';

import { MonstrosPage } from '../pages/monstros/monstros';
import { MagiasPage } from '../pages/magias/magias';

@Component({
  templateUrl: 'app.html',
  providers: [FavoritosProvider]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  public activePage: string = 'monstros';
  public rootPage: any = MonstrosPage;

  pages: Array<{title: string, classe: string, component: any}>;

  constructor(
    public platform: Platform, 
    public favoritosProv: FavoritosProvider) {
    
    this.initializeApp();

    this.pages = [
      { title: 'Monsters', classe: 'monstros', component: MonstrosPage },
      { title: 'Spells',  classe: 'magias', component: MagiasPage },
    ];

  }
  
  isActive(classe: string){
    return classe == this.activePage ? 'active' : '';
  }

  initializeApp(){
    this.platform.ready().then(() => {
      StatusBar.backgroundColorByHexString('#039BE5');
      Splashscreen.hide();
    });
  }

  openPage(page: any){
    this.activePage = page.classe;
    this.nav.setRoot(page.component);
  }

}
