import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { 
    console.log('Spotify Service listopp');
  }

  getQuery( query : string){
    const url=`https://api.spotify.com/v1/${query}`;
    
    const headers= new HttpHeaders(
      {
        'Authorization': 'Bearer //COMPLETE WITH ACCESS TOKEN "NgCXRKc...MzYjw"'
      }
    )
    return this.http.get(url, {headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20')
    .pipe( map( (data: any) => {
      return data.albums.items;
    }))
  }
  
  getArtistas(termino: string){
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
    .pipe(map ((data : any)=> data.artists.items));

  }
  getArtista(id: string){
    return this.getQuery(`artists/${id}`);

  }
  getTopTracks (id : string){
    return this.getQuery(`artists/${id}/top-tracks?market=AR`)
    .pipe(map((data:any) => data.tracks));
  }
}
