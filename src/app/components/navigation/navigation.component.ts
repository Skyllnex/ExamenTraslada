import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  totalLikes: number = 0;
  constructor(
    private _noticiasService:NoticiasService
    ) {}

  ngOnInit(): void{
    this._noticiasService.getMockNoticias()
    .subscribe(x =>{
      let likeList = x.map(x => x.likes);
      this.totalLikes = likeList.reduce((acc, current) => acc + current,0);
    });
    this._noticiasService.sendAddLike
      .subscribe(() => this.totalLikes++);
  }

}
