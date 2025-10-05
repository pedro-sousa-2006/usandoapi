import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter } from '@ionic/angular/standalone';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.page.html',
  styleUrls: ['./rodape.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonFooter]
})
export class RodapePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  data= new Date().getFullYear();

}
