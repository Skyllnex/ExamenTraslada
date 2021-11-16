import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  noticias: Noticia[];
  constructor(private _noticiasService: NoticiasService) { }

  ngOnInit(): void {
    this._noticiasService.getMockNoticias()
      .subscribe(x => this.noticias = x);
  }

  formatDate(date: string): string{
    return new Intl.DateTimeFormat('en-GB').format(new Date(date));
  }

  addLikes(index: number): void{
    console.log(index);
    this.noticias[index].likes++;
    this._noticiasService.sendAddLike.emit();
  }

}
