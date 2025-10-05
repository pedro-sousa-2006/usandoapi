import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonButton } from '@ionic/angular/standalone';
import { MenuPage } from "../menu/menu.page";
import { RodapePage } from "../rodape/rodape.page";
import {Services} from '../service/services'; 

@Component({
  selector: 'app-myapi',
  templateUrl: './myapi.page.html',
  styleUrls: ['./myapi.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, 
    IonTitle, IonToolbar, CommonModule,
     FormsModule, MenuPage, RodapePage,
      IonImg, IonButton ]
})
export class MyapiPage implements OnInit {
imagem = "";
  constructor(private services:Services) { }

  ngOnInit() {
    
  }


  async cat(){
    try{
      const res =await this.services.getRandomCat();
      this.imagem =  res[0].url;
    }catch{
      console.log("erro");
    }
}
remove(){
  this.imagem = "";
}
}