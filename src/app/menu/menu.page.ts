import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonRouterLink, IonButtons } from '@ionic/angular/standalone';
import { } from "../../../node_modules/@ionic/angular/standalone/navigation/router-link-delegate";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, 
    IonTitle, IonToolbar, 
    CommonModule, FormsModule, 
    IonButton, IonRouterLink, RouterModule ,
    IonButtons]
})
export class MenuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
