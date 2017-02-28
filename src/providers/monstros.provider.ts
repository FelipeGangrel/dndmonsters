import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class MonstrosProvider {

  monstros: any;

  constructor(public http: Http) {
    console.log('Hello Monstros Provider');
  }

  getAll(){

    if(this.monstros){
      return Promise.resolve(this.monstros);
    }

    return new Promise(resolve => {
      this.http.get('./assets/monstros.json')
        .map(res => res.json())
        .subscribe(data => {
          this.monstros = this.sortByKey(data, 'name');
          
          this.monstros.forEach((item, index) => {
            this.monstros[index].id = index;
          });

          resolve(this.monstros);
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
