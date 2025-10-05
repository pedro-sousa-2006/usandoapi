import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Services {
  private url = "https://api.thecatapi.com/v1/images/search";

  constructor(private httpCliente: HttpClient) {}

  // Retorna Promise em vez de Observable
  getRandomCat(): Promise<any> {
    return lastValueFrom(this.httpCliente.get<any>(this.url));
  }
}