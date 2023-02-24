import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  artistas: any[]=[];
  loading: boolean=false;

  constructor(private spoti: SpotifyService) {
   }


  buscar(termino:string){
    if(termino!='')
    {
      this.loading=true;
    }
    
    console.log(termino);
    this.spoti.getArtistas(termino)
      .subscribe( (data: any) =>{
        console.log(data);
        this.artistas=data;
        this.loading=false;
      })
    
  }

}
