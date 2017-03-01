import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  monsters: any;
  spells: any;
  
  simpleMeleeWeapons: any;
  martialMeleeWeapons: any;

  simpleRangedWeapons: any;
  martialRangedWeapons: any;
  fireWeapons: any;

  constructor(public http: Http) {
    console.log('Hello DataService Provider');
  }

  getMonsters(){
    if(this.monsters){
      return Promise.resolve(this.monsters);
    }

    return new Promise(resolve => {
      this.http.get('./assets/data/monsters_en.json')
        .map(res => res.json())
        .subscribe(data => {
          this.monsters = this.sortByKey(data, 'name');
          
          this.monsters.forEach((item, index) => {
            this.monsters[index].id = index;
          });

          resolve(this.monsters);
        });
    });
  }

  getSpells(){
    if(this.spells){
      return Promise.resolve(this.spells);
    }

    return new Promise(resolve => {
      this.http.get('./assets/data/spells_en.json')
        .map(res => res.json())
        .subscribe(data => {
          this.spells = this.sortByKey(data, 'name');
          
          this.spells.forEach((item, index) => {
            this.spells[index].id = index;
          });

          resolve(this.spells);
        });
    });
  }

  getSimpleMeleeWeapons(){
    if(this.simpleMeleeWeapons){
      return Promise.resolve(this.simpleMeleeWeapons);
    }

    return new Promise(resolve => {
      this.http.get('./assets/data/simpleMeleeWeapons_en.json')
        .map(res => res.json())
        .subscribe(data => {
          this.simpleMeleeWeapons = this.sortByKey(data, 'name');
          
          this.simpleMeleeWeapons.forEach((item, index) => {
            this.simpleMeleeWeapons[index].id = index;
          });

          resolve(this.simpleMeleeWeapons);
        });
    });
  }

  getMartialMeleeWeapons(){
    if(this.martialMeleeWeapons){
      return Promise.resolve(this.martialMeleeWeapons);
    }

    return new Promise(resolve => {
      this.http.get('./assets/data/martialMeleeWeapons_en.json')
        .map(res => res.json())
        .subscribe(data => {
          this.martialMeleeWeapons = this.sortByKey(data, 'name');
          
          this.martialMeleeWeapons.forEach((item, index) => {
            this.martialMeleeWeapons[index].id = index;
          });

          resolve(this.martialMeleeWeapons);
        });
    });
  }

  getSimpleRangedWeapons(){
    if(this.simpleRangedWeapons){
      return Promise.resolve(this.simpleRangedWeapons);
    }

    return new Promise(resolve => {
      this.http.get('./assets/data/simpleRangedWeapons_en.json')
        .map(res => res.json())
        .subscribe(data => {
          this.simpleRangedWeapons = this.sortByKey(data, 'name');
          
          this.simpleRangedWeapons.forEach((item, index) => {
            this.simpleRangedWeapons[index].id = index;
          });

          resolve(this.simpleRangedWeapons);
        });
    });
  }

  getMartialRangedWeapons(){
    if(this.martialRangedWeapons){
      return Promise.resolve(this.martialRangedWeapons);
    }

    return new Promise(resolve => {
      this.http.get('./assets/data/martialRangedWeapons_en.json')
        .map(res => res.json())
        .subscribe(data => {
          this.martialRangedWeapons = this.sortByKey(data, 'name');
          
          this.martialRangedWeapons.forEach((item, index) => {
            this.martialRangedWeapons[index].id = index;
          });

          resolve(this.martialRangedWeapons);
        });
    });
  }

  getFireWeapons(){
    if(this.fireWeapons){
      return Promise.resolve(this.fireWeapons);
    }

    return new Promise(resolve => {
      this.http.get('./assets/data/firearms_en.json')
        .map(res => res.json())
        .subscribe(data => {
          this.fireWeapons = this.sortByKey(data, 'name');
          
          this.fireWeapons.forEach((item, index) => {
            this.fireWeapons[index].id = index;
          });

          resolve(this.fireWeapons);
        });
    });
  }

  sortByKey(array, key) {
    return array.sort((a, b) =>{
        let x = a[key]; let y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }

}
