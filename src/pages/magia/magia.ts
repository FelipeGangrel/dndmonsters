import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FavoritosProvider } from '../../providers/favoritos.provider';

@Component({
  selector: 'page-magia',
  templateUrl: 'magia.html',
  providers: [FavoritosProvider]
})
export class MagiaPage {

  magia: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public favoritosProv: FavoritosProvider
  ) {
    this.loadMagia();
  }

  loadMagia(){
    this.magia = this.navParams.get('magia');
    console.log(this.magia);
  }

  favoritoAdd(id: any){ // Adicionando a magia
    this.favoritosProv.addMagia(id);
  }

  favoritoRemove(id: any){ // Removando a magia
    this.favoritosProv.removeMagia(id);
  }

  nosFavoritos(){ // Verificando se o monstro consta dentre os favoritos
    let favoritos = this.favoritosProv.listaMagias();
    return favoritos.indexOf(this.magia.id) > -1 ? true : false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MagiaPage');
  }

}
