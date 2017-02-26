import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { MonstrosProvider } from '../../providers/monstros.provider';

import { MonstroPage } from '../../pages/monstro/monstro';

@Component({
  selector: 'page-mosntros',
  templateUrl: 'monstros.html',
  providers: [MonstrosProvider]
})
export class MonstrosPage {

  monstros: any;
  todosMonstros: any;

  searchQuery: string = '';

  constructor(public navCtrl: NavController, public monstrosProv: MonstrosProvider) {
    this.initializeItems();
  }

  initializeItems(){
    this.monstrosProv.getAll().then(data =>{
      this.todosMonstros = data;
      this.monstros = this.todosMonstros;
    });
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

  abrirMonstro(m: any){
    this.navCtrl.push(MonstroPage, {
      monstro: m
    });
  }


}
