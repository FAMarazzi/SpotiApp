import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent {
  artista:any={};
  loading:boolean=true;
  topTracks: any[]= [];

  constructor(private aRoute: ActivatedRoute,
              private spoti: SpotifyService) {
    this.loading=true;
    this.aRoute.params.subscribe(params =>{
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    })
    
   }

  getArtista(id: string)
  {
      this.spoti.getArtista(id).subscribe(artista =>{
      this.artista=artista;
      this.loading=false;
    })
  }
  getTopTracks(id: string)
  {
    this.spoti.getTopTracks(id)
    .subscribe(topTracks =>{
      console.log(topTracks);
      this.topTracks=topTracks;
    });
  }
}
