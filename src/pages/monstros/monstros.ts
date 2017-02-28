import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { MonstrosProvider } from '../../providers/monstros.provider';
import { FavoritosProvider } from '../../providers/favoritos.provider';

import { MonstroPage } from '../../pages/monstro/monstro';

@Component({
  selector: 'page-mosntros',
  templateUrl: 'monstros.html',
  providers: [MonstrosProvider, FavoritosProvider]
})
export class MonstrosPage {

  monstros: any;
  todosMonstros: any;
  favoritosMonstros: any;

  favoritosToggle: boolean = false;
  
  searchQuery: string = '';

  constructor(
    public navCtrl: NavController, 
    public monstrosProv: MonstrosProvider,
    public favoritosProv: FavoritosProvider
    ) {
    
  }


  loadMonstros(){
    this.favoritosProv.listaMonstrosPromise().then(data =>{
      let fav_ids: any = data;
      this.monstrosProv.getAll().then(data =>{
        this.todosMonstros = data;
        this.monstros = this.todosMonstros;
        this.favoritosMonstros = [];
        for(let monstro of this.todosMonstros){
          if( fav_ids.indexOf(monstro.id) > -1 ){
            this.favoritosMonstros.push(monstro);
          }
        }

        if(this.favoritosToggle){
          this.monstros = this.favoritosMonstros;
        }else{
          this.monstros = this.todosMonstros;
        }

      });
    });
  }

  filtraFavoritos(){
    this.favoritosToggle = this.favoritosToggle ? false : true;
    this.loadMonstros();
  }

  ionViewDidEnter(){
    this.loadMonstros();
  }

  getItems(ev: any) {
    // Resetando itens da lista
    this.monstros = this.todosMonstros;

    // Obtendo valor da busca
    let val = ev.target.value;

    // Se o valor da busca for válido, buscar
    if (val && val.trim() != '') {
      this.monstros = this.todosMonstros.filter(item => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  abrirMonstro(monstro: any){
    this.navCtrl.push(MonstroPage, {
      monstro: monstro
    });
  }


}
