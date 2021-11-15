import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Noticia } from '../models/noticia';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(
    private http: HttpClient
  ) { }

  getNoticias(): Observable<Noticia> {
    return this.http.get<Noticia>(`http://api2.traslada.com.ar/test/examen/noticias`);
  }

  getMockNoticias(){
    let noticias = [
      {
        titulo : "Un material natural ideado en Finlandia podría reemplazarlo al plástico",
        fechaPublicacion : "2019-12-16T11:30:00.4900348-03:00",
        likes : 0},
      {
        titulo : "Llegó la batería que se retuerce para los celulares plegables",
        fechaPublicacion : "2019-12-15T11:30:00.4900348-03:00",
        likes : 0
      }
    ];
    return of(noticias).pipe(delay(500));
  }
}
