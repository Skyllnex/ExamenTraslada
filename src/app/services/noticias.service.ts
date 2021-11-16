import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Noticia } from '../models/noticia';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  @Output() sendAddLike = new EventEmitter();
  private noticias: Noticia[] = [
    {
      titulo : "Un material natural ideado en Finlandia podría reemplazarlo al plástico",
      fechaPublicacion : "2019-12-16T11:30:00.4900348-03:00",
      likes : 0},
    {
      titulo : "Llegó la batería que se retuerce para los celulares plegables",
      fechaPublicacion : "2019-12-15T11:30:00.4900348-03:00",
      likes : 0
    },
    {
      titulo : "Google redobla su apuesta por los wearables con una campera de jean",
      fechaPublicacion : "2019-11-17T11:30:00.4900348-03:00",
      likes : 0
    },
    {
        titulo : "Con chips propios China quiere ser autosuficiente y dominar el mercado mundial",
        fechaPublicacion : "2019-12-12T11:30:00.4900348-03:00",
        likes : 0
    },
    {
        titulo : "Se construye en Ezeiza el reactor multipropósito más moderno del mundo",
        fechaPublicacion : "2019-12-14T11:30:00.4900348-03:00",
        likes : 0
    }
  ];

  constructor(
    private http: HttpClient
  ) { }

  getNoticias(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(`http://api2.traslada.com.ar/test/examen/noticias`);
  }

  getMockNoticias(): Observable<Noticia[]>{
    return of(this.noticias).pipe(delay(500));
  }
}
