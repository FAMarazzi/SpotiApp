import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

  novedades: any[]=[];
  loading: boolean;
  error: boolean;
  errorDescripcion: string='';

  constructor( private spoti: SpotifyService){
    this.loading=true;
    this.error=false;
    

    /*LO SIGUIENTE ESTÁ POR SER OBSOLETO

    this.spoti.getNewReleases()
      .subscribe((data : any) => {
      this.novedades=data;
      this.loading=false;
    }, error=>{
      console.log(error);

    });
  }
  */
 // EN CAMBIO DEBERÍA HACERSE ASI:
 
 this.spoti.getNewReleases()
 .subscribe({
  next: (data: any) => {
                        this.novedades=data;
                        this.loading=false;
                      }
                  ,
    error: (errorService:any) => {
                  this.loading=false;
                  this.error=true;
                  this.errorDescripcion=errorService.error.error.message;
                  console.log(this.errorDescripcion);
                }

});
  
  }
  ngOnInit(): void {
  }

}
