import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class MagiasProvider {

  spells: any;

  constructor(public http: Http) {
    console.log('Hello MagiasProvider Provider');
  }

  getAll(){

    if(this.spells){
      return Promise.resolve(this.spells);
    }

    return new Promise(resolve => {
      this.http.get('./assets/spells.json')
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

  sortByKey(array, key) {
    return array.sort((a, b) =>{
        let x = a[key]; let y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }


}
