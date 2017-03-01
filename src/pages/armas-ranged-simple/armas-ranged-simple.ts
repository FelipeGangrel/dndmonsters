import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DataService } from '../../providers/data.service';

@Component({
  selector: 'page-armas-ranged-simple',
  templateUrl: 'armas-ranged-simple.html',
  providers: [DataService]
})
export class ArmasRangedSimplePage {

  armas: any;
  todasArmas: any;
  
  searchQuery: string = '';

  armaSelecionada: number = -1;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataServ: DataService) {}

  loadArmas(){
    this.dataServ.getSimpleRangedWeapons().then(data =>{
      this.todasArmas = data;
      this.armas = this.todasArmas;
    });
  }

  ionViewDidEnter(){
    this.loadArmas();
  }

  getItems(ev: any) {
    // Resetando itens da lista
    this.armas = this.todasArmas;

    // Obtendo valor da busca
    let val = ev.target.value;

    // Se o valor da busca for válido, buscar
    if (val && val.trim() != '') {
      this.armas = this.todasArmas.filter(item => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  selecionaArma(id: number) {
    this.armaSelecionada = this.armaSelecionada != id ? id : -1;
  }

}
