import { Component, OnInit } from '@angular/core';
import { Foto } from './models/foto';

import { ShopService } from './services/shop.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

 
  fotos: any = [];
  searching: boolean = false;
// foto
  handleSuccss(res){
  this.fotos = res.hits;
  console.log(res.hits)
  
}

  constructor(private shopService: ShopService){

  }
  ngOnInit(){

  }

  

  getData(fotoName: string){
    this.searching=true;
    this.shopService.getFoto(fotoName)
     .subscribe(
    //  res => console.log(res),
     res => {
       console.log(res);
       this.handleSuccss(res)
      },
     err => console.log(err),
     ()=>this.searching=false
    )

  }


 //getData(fotoName: string) {
 // this.shopService.getFoto(fotoName)
 //   .subscribe(res => {
  //    this.shopService.hits = res as Foto[];
  //    console.log(res);
   // });
//}

  submitFoto(fotoName: HTMLInputElement){
    //console.log(fotoName.value);
    this.getData(fotoName.value)

    fotoName.value = '';
    fotoName.focus();
    return false;

  }
}
