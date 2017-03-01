import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../providers/data.service';
import { FavoritosProvider } from '../../providers/favoritos.provider';

import { MagiaPage } from '../../pages/magia/magia';

@Component({
  selector: 'page-magias',
  templateUrl: 'magias.html',
  providers: [DataService, FavoritosProvider]
})
export class MagiasPage {

  magias: any;
  todasMagias: any;

  favoritasMagias: any;
  favoritosToggle: boolean = false;

  searchQuery: string = '';

  constructor(
    public navCtrl: NavController, 
    public dataServ: DataService,
    public favoritosProv: FavoritosProvider
  ) {

  }

  loadMagias(){
    this.favoritosProv.listaMagiasPromise().then(data =>{
      let fav_ids: any = data;
      this.dataServ.getSpells().then(data =>{
        this.todasMagias = data;
        this.magias = this.todasMagias;
        this.favoritasMagias = [];
        for(let magia of this.todasMagias){
          if( fav_ids.indexOf(magia.id) > -1 ){
            this.favoritasMagias.push(magia);
          }
        }

        if(this.favoritosToggle){
          this.magias = this.favoritasMagias;
        }else{
          this.magias = this.todasMagias;
        }

      });
    });
  }

  filtraFavoritos(){
    this.favoritosToggle = this.favoritosToggle ? false : true;
    this.loadMagias();
  }

  ionViewDidEnter(){
    this.loadMagias();
  }

  

  getItems(ev: any) {
    // Resetando itens da lista
    this.magias = this.todasMagias;

    // Obtendo valor da busca
    let val = ev.target.value;

    // Se o valor da busca for válido, buscar
    if (val && val.trim() != '') {
      this.magias = this.todasMagias.filter(item => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  abrirMagia(magia: any){
    this.navCtrl.push(MagiaPage, {
      magia: magia
    });
  }

}
