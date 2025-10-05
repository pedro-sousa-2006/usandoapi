import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonRouterLink,IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import {  } from "../../../node_modules/@ionic/angular/standalone/navigation/router-link-delegate";
import { MenuPage } from "../menu/menu.page";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonRouterLink, MenuPage]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
