import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class MonstrosProvider {

  data: any;

  constructor(public http: Http) {
    console.log('Hello Monstros Provider');
  }

  getAll(){

    if(this.data){
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('./assets/monstros.json')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          this.data = this.sortByKey(this.data, 'name');
          resolve(this.data);
        })
    });

  }


  sortByKey(array, key) {
    return array.sort((a, b) =>{
        let x = a[key]; let y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }

}
