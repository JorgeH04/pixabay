import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Foto } from '../models/foto';
//import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

 // selectedFoto: Foto;
 // hits: Foto[]; 

  APIkey= '15429238-aa65dcfccb897a55aadad620e';
  URI: string = '';

  constructor(private http: HttpClient) { 
    this.URI = `https://pixabay.com/api/?key=${this.APIkey}&q=`
  }

  getFoto(foto: string){
     return this.http.get(`${this.URI}${foto}`)
   // return this.http.get(this.URI + foto).map(res => res.json());
  }
}
