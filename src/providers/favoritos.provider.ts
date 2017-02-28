import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';


@Injectable()
export class FavoritosProvider {

  monstros: any = [];
  magias: any = [];

  constructor(public http: Http, public storage: Storage) {
    console.log('Hello FavoritosProvider Provider');
    this.iniciar();
  }

  iniciar(){
    this.storage.get('fav_monstros').then(data =>{
      if(data == null) this.storage.set('fav_monstros', []);
      if(data != null) this.monstros = data;
    });
    this.storage.get('fav_magias').then(data =>{
      if(data == null) this.storage.set('fav_magias', []);
      if(data != null) this.magias = data;
    });
  }

  listaMonstros(){ // Provê uma lista simples com os ids
    return this.monstros;
  }

  listaMagias(){
    return this.magias;
  }

  listaMonstrosPromise(){
    return new Promise(resolve => {
      this.storage.get('fav_monstros').then(data =>{
        this.monstros = data;
        resolve(this.monstros);
      });
    });
  }

  listaMagiasPromise(){
    return new Promise(resolve => {
      this.storage.get('fav_magias').then(data =>{
        this.magias = data;
        resolve(this.magias);
      });
    });
  }

  addMonstro(id: number){ // Adiciona o id do monstro aos favoritos
    if(this.monstros.indexOf(id) == -1){
      this.monstros.push(id);
      this.storage.set('fav_monstros', this.monstros);
    }
  }

  addMagia(id: number){ // Adiciona o id da magia aos favoritos
    if(this.magias.indexOf(id) == -1){
      this.magias.push(id);
      this.storage.set('fav_magias', this.magias);
    }
  }

  removeMonstro(id: number){ // Remove o id do monstro dos favoritos
    if(this.monstros.indexOf(id) > -1){
      this.monstros.forEach((item, index) => {
        if(item == id) this.monstros.splice(index, 1);
      });
      this.storage.set('fav_monstros', this.monstros);
    }
  }

  removeMagia(id: number){ // Remove o id da magia dos favoritos
    if(this.magias.indexOf(id) > -1){
      this.magias.forEach((item, index) => {
        if(item == id) this.magias.splice(index, 1);
      });
      this.storage.set('fav_magias', this.magias);
    }
  }


}
